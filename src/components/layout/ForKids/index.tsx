"use client";
import React from "react";
import "./style.scss";

const kidsData = [
  {
    id: 1,
    bg: "#FFF6C9",
    image: "/images/forkids.png",
    title: "Muzlik davrida qizaloqlar",
    date: "12-aprel",
    price: "240 000 UZS",
  },
  {
    id: 2,
    bg: "#CCF2FF",
    image: "/images/forkids.png",
    title: "Muzlik davrida qizaloqlar",
    date: "12-aprel",
    price: "650 000 UZS",
  },
  {
    id: 3,
    bg: "#FFD7DA",
    image: "/images/forkids.png",
    title: "Muzlik davrida qizaloqlar",
    date: "12-aprel",
    price: "650 000 UZS",
  },
  {
    id: 4,
    bg: "#EAD6FF",
    image: "/images/forkids.png",
    title: "Muzlik davrida qizaloqlar",
    date: "12-aprel",
    price: "650 000 UZS",
  },
  {
    id: 5,
    bg: "#EAD6FF",
    image: "/images/forkids.png",
    title: "Muzlik davrida qizaloqlar",
    date: "12-aprel",
    price: "650 000 UZS",
  },
];

export default function ForKids() {
  return (
    <section className="for-kids">
      <div className="for-kids__top">
        <h2>BOLALAR UCHUN</h2>
        <button className="for-kids__top-btn">
          Barchasi <span>↗</span>
        </button>
      </div>

      <div className="for-kids__grid">
        {kidsData.map((item) => (
          <div
            key={item.id}
            className="kids-card"
            style={{ backgroundColor: item.bg }}
          >
            <div className="kids-card__img-wrap">
              <img src={item.image} alt={item.title} />
              <button className="kids-card__bookmark">
                {/* SVG O‘ZINGIZNIQISI BO‘LADI */}
                <YourBookmarkSVG />
              </button>
            </div>

            <div className="kids-card__content">
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <div className="kids-card__price">
                <span>{item.price}</span>
                <span className="ticket-icon">🎫</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Bookmark ikon uchun
function YourBookmarkSVG() {
  return <div style={{ width: 20, height: 20 }}>🔖</div>;
}
