import React from "react";
import "./styles/Features.css";

function Features() {
  const data = [
    { title: "Affordable Rates", desc: "Find PGs at pocket-friendly prices." },
    { title: "Prime Locations", desc: "Stay close to your work or college." },
    { title: "Safe & Secure", desc: "24/7 security and trusted owners." },
  ];

  return (
    <section className="features">
      <h2 className="features-title">Why Choose Us?</h2>
      <div className="cards">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
