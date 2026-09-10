"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "../data/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          {!logoError ? (
            <Image
              src={siteConfig.header.logo}
              alt={siteConfig.header.projectName}
              width={164}
              height={43}
              onError={() => setLogoError(true)}
              className="h-9 w-auto md:h-10"
            />
          ) : (
            <span className="text-lg font-bold tracking-wide text-white md:text-xl">
              {siteConfig.header.projectName}
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.header.gnb.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.header.phone.replace(/-/g, "")}`}
            className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-navy transition-transform hover:scale-105"
          >
            📞 {siteConfig.header.phone}
          </a>
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 bg-navy px-4 pb-4 md:hidden">
          {siteConfig.header.gnb.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-2 py-3 text-white hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.header.phone.replace(/-/g, "")}`}
            className="mt-2 rounded-full bg-gold px-5 py-3 text-center font-bold text-navy"
          >
            📞 {siteConfig.header.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
