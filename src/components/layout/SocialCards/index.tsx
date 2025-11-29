"use client";
import React from "react";
import "./style.scss";

export default function SocialCards() {
  const cards = [
    {
      id: 1,
      title: "Konsertlarga chiptalar bizda",
      bg: "linear-gradient(135deg, #004BFF 0%, #00C6FF 100%)",
      icon: "/images/social/1.png",
    },
    {
      id: 2,
      title: "Bizni kuzatib boring",
      bg: "linear-gradient(135deg, #D4FB00 0%, #8AF200 100%)",
      icon: "/images/social/2.png",
    },
    {
      id: 3,
      title: "Bizga obuna bo'ling",
      bg: "linear-gradient(135deg, #00D1FF 0%, #00A6FF 100%)",
      icon: "/images/social/3.png",
    },
  ];

  return (
    <section className="social-cards">
      {cards.map((item) => (
        <div
          key={item.id}
          className="social-card"
          style={{ background: item.bg }}
        >
          <div className="text">{item.title}</div>

          {/* SVG joyi (siz o'zingiz qo'yasiz) */}
          <img src={item.icon} alt="icon" className="icon" />
        </div>
      ))}
    </section>
  );
}
