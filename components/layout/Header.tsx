"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteContent";
import { useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/pricing", label: "Membership" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // focus the first link in the mobile menu for accessibility
      firstLinkRef.current?.focus();
    } else {
      // return focus to the toggle button
      toggleRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <header className={`site-header ${isSticky ? "site-header--sticky" : ""}`}> 
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="Zelha Spin & Fitness home">
          <span className="brand-mark" aria-hidden>
            <Dumbbell size={20} />
          </span>
          <span className="brand-name">{siteConfig.name}</span>
        </Link>

        <nav className="menu" aria-label="Main navigation">
          {navLinks.map((link, idx) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div id="mobile-menu" className={`menu ${isOpen ? "active" : ""}`} aria-hidden={!isOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              ref={idx === 0 ? firstLinkRef : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
