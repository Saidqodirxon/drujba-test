"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import "swiper/css";
import "./style.scss";

const products = [
  {
    id: 1,
    date: "18",
    month: "Aprel",
    title: "Xalqaro Professional boks kechasi",
    price: "2 000 000 UZS",
    image: "/images/popular.png",
  },
  {
    id: 2,
    date: "18",
    month: "Aprel",
    title: "Xalqaro Professional boks kechasi",
    price: "2 000 000 UZS",
    image: "/images/popular.png",
  },
  {
    id: 3,
    date: "18",
    month: "Aprel",
    title: "Xalqaro Professional boks kechasi",
    price: "2 000 000 UZS",
    image: "/images/popular.png",
  },
  {
    id: 4,
    date: "18",
    month: "Aprel",
    title: "Xalqaro Professional boks kechasi",
    price: "2 000 000 UZS",
    image: "/images/popular.png",
  },
];
export default function NewConcerts() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="popular">
      <div className="popular__top">
        <h2 className="popular__title">NIMA YANGILIKLAR</h2>

        <button className="popular__all-btn">
          Barchasi <ChevronRight size={18} />
        </button>
      </div>

      <div className="popular__slider-wrap">
        <Swiper
          spaceBetween={20}
          slidesPerView={2.3} // 2 ta to'liq + 3-karta bir qismi
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="popular__swiper"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="popular__card">
                <div
                  className="popular__card-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="popular__date">
                    <span>{item.date}</span>
                    <p>{item.month}</p>
                  </div>

                  <button className="popular__save-btn">
                    <Bookmark size={22} />
                  </button>

                  <span className="popular__price">{item.price}</span>
                </div>

                <div className="popular__card-info">
                  <h3>{item.title}</h3>
                  <p>📍 Tadbir o‘tkaziladigan manzil</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="popular__controls">
          <button
            className="popular__ctrl"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className="popular__ctrl"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
