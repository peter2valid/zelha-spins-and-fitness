"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/siteContent";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" aria-label="Zelha hero slider">
      {heroSlides.map((slide, index) => (
        <div key={slide.title} className={`hero-slide ${index === activeIndex ? "is-active" : ""}`}>
          <Image
            src={slide.image}
            alt={`${slide.title} ${slide.subtitle}`}
            fill
            priority={index === 0}
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <h1>
              {slide.title}
              <span>{slide.subtitle}</span>
            </h1>
            <p>{slide.description}</p>
            <Link href="/contact" className="btn-primary">
              Start Your Trial
            </Link>
          </div>
        </div>
      ))}

      <div className="hero-dots" role="tablist" aria-label="Choose slide">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.subtitle}
            type="button"
            aria-label={`Slide ${index + 1}`}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
