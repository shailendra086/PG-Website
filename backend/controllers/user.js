const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

// Environment / config (for now hardcoded fallback secret)
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
const JWT_EXPIRES_IN = '1h';

// Helper to generate token
function generateToken(user) {
	return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// POST /api/auth/signup
async function signup(req, res) {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res.status(400).json({ message: 'Name, email and password are required' });
		}
		const existing = await User.findOne({ email });
		if (existing) {
			return res.status(409).json({ message: 'Email already registered' });
		}
		const hashed = await bcrypt.hash(password, 10);
		const user = await User.create({ name, email, password: hashed });
		const token = generateToken(user);
		return res.status(201).json({
			message: 'User created successfully',
			user: { id: user._id, name: user.name, email: user.email },
			token
		});
	} catch (err) {
		console.error('Signup error:', err);
		return res.status(500).json({ message: 'Internal server error' });
	}
}

// POST /api/auth/login
async function login(req, res) {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ message: 'Email and password are required' });
		}
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}
		const valid = await bcrypt.compare(password, user.password);
		if (!valid) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}
		const token = generateToken(user);
		return res.json({
			message: 'Login successful',
			user: { id: user._id, name: user.name, email: user.email },
			token
		});
	} catch (err) {
		console.error('Login error:', err);
		return res.status(500).json({ message: 'Internal server error' });
	}
}

module.exports = { signup, login };
