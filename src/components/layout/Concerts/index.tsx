"use client";
import React from "react";
import "./style.scss";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";

const concerts = [
  {
    id: 1,
    date: "18",
    month: "Aprel",
    year: "2024",
    title: "Shaxriyor",
    subtitle: "Xalqaro odilqol saroyi",
    price: "600 000 UZS",
    image: "/images/popular.png",
  },
  {
    id: 2,
    date: "18",
    month: "Aprel",
    year: "2024",
    title: "Shaxriyor",
    subtitle: "Xalqaro odilqol saroyi",
    price: "340 000 UZS",
    image: "/images/popular.png",
  },
  {
    id: 3,
    date: "18",
    month: "Aprel",
    year: "2024",
    title: "Shaxriyor",
    subtitle: "Xalqaro odilqol saroyi",
    price: "600 000 UZS",
    image: "/images/popular.png",
  },
  {
    id: 4,
    date: "18",
    month: "Aprel",
    year: "2024",
    title: "Shaxriyor",
    subtitle: "Xalqaro odilqol saroyi",
    price: "340 000 UZS",
    image: "/images/popular.png",
  },
];

export default function Concerts() {
  return (
    <section className="concerts">
      <div className="concerts__top">
        <h2>KONSERTLAR</h2>
        <button className="concerts__all-btn">
          Barchasi <span>→</span>
        </button>
      </div>

      <div className="concerts__list">
        {concerts.map((item) => (
          <div key={item.id} className="concert-card">
            <div className="concert-card__image">
              <img src={item.image} alt={item.title} />
              <button className="bookmark-btn">
                <Bookmark size={20} />
              </button>

              <div className="concert-date">
                <span className="date">{item.date}</span>
                <span className="month">{item.month}</span>
                <span className="year">{item.year}</span>
              </div>
            </div>

            <div className="concert-card__info">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <button className="price-btn">{item.price}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="concerts__nav">
        <button className="nav-btn">
          <ChevronLeft />
        </button>
        <button className="nav-btn">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
