"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={sticky ? "sticky" : ""}>
      <div className="brand">
        <img src="/img/LOGO4.png" alt="Zelha Spin and Fitness brand" />
      </div>
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <div className="btnnn btn">
          <i className="fas fa-times close-btn" onClick={() => setMenuOpen(false)}></i>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/classes">Login</Link>
      </div>
      <div className="btnnn btn">
        <i className="fas fa-bars menu-btn" style={{ color: "#000" }} onClick={() => setMenuOpen(true)}></i>
      </div>

      <div className="social">
        <a href="#" aria-label="Facebook">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </header>
  );
}
