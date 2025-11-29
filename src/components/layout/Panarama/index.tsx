"use client";
import React from "react";
import "./style.scss";

export default function Panarama() {
  return (
    <section className="panarama">
      <div className="panarama__content">
        <h2>
          XALQLAR DO‘STLIGI SAROYIDA <br />
          <span>PANARAMA</span>
        </h2>

        <button className="panarama__btn">
          Ko‘rish <span>→</span>
        </button>
      </div>

      <div className="panarama__image">
        <img src="/images/panarama.png" alt="360 panorama" />
      </div>
    </section>
  );
}
