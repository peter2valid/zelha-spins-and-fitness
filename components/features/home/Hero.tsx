"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/siteContent";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home">
      {heroSlides.map((slide, index) => (
        <img
          key={slide.title}
          className={`img-slide ${index === activeSlide ? "active" : ""}`}
          src={slide.image}
          alt={slide.subtitle}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          width={1920}
          height={1080}
        />
      ))}

      {heroSlides.map((slide, index) => (
        <div key={slide.subtitle} className={`SlideContent ${index === activeSlide ? "active" : ""}`}>
          <h1>
            {slide.title}
            <br />
            <span>{slide.subtitle}</span>
          </h1>
          <p>{slide.description}</p>
          <Link href="/contact">Start Your Fitness Journey in Juja Today</Link>
        </div>
      ))}

      <div className="slider-navigation">
        {heroSlides.map((_, index) => (
          <div
            key={index}
            className={`nav-btn ${index === activeSlide ? "active" : ""}`}
            onClick={() => setActiveSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
