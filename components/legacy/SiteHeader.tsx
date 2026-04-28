"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Menu, Music2, X } from "lucide-react";
import { siteConfig } from "@/data/siteContent";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const socialLinks: Array<{
    href: string;
    label: string;
    icon: typeof Instagram;
  }> = [];

  if (siteConfig.socialLinks.instagram) {
    socialLinks.push({
      href: siteConfig.socialLinks.instagram,
      label: "Instagram",
      icon: Instagram
    });
  }

  if (siteConfig.socialLinks.facebook) {
    socialLinks.push({
      href: siteConfig.socialLinks.facebook,
      label: "Facebook",
      icon: Facebook
    });
  }

  if (siteConfig.socialLinks.tiktok) {
    socialLinks.push({
      href: siteConfig.socialLinks.tiktok,
      label: "TikTok",
      icon: Music2
    });
  }

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={sticky ? "sticky" : ""}>
      <Link className="brand" href="/" aria-label="Zelha Spin & Fitness home">
        <span className="brand-mark" aria-hidden>
          <span className="brand-mark__glyph">Z</span>
        </span>
        <span className="brand-name">{siteConfig.shortName}</span>
      </Link>
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <button className="btnnn btn" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
          <X className="close-btn" size={24} />
        </button>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/classes" onClick={() => setMenuOpen(false)}>Classes</Link>
        <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
      <button className="btnnn btn" type="button" aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
        <Menu className="menu-btn" size={24} />
      </button>

      {socialLinks.length > 0 ? (
        <div className="social">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
              <Icon size={18} aria-hidden />
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
