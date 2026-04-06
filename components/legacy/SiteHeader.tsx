"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteContent";

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
        <div className="brand-logo-wrapper">
          <img src="/img/LOGO4.png" alt="Zelha Spin and Fitness brand" />
        </div>
      </div>
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <div className="btnnn btn">
          <i className="fas fa-times close-btn" onClick={() => setMenuOpen(false)} aria-hidden="true"></i>
        </div>
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/contact">Book a Class</Link>
      </div>
      <div className="btnnn btn">
        <i className="fas fa-bars menu-btn" style={{ color: "#000" }} onClick={() => setMenuOpen(true)} aria-hidden="true"></i>
      </div>

      <div className="social">
        <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fa fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <i className="fa fa-music" aria-hidden="true"></i>
        </a>
        <a href={`https://wa.me/254${siteConfig.whatsapp.replace(/^0/, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
}
