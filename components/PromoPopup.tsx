"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../data/site-config";

const HIDE_KEY = "detre-promo-popup-hide-until";

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!siteConfig.promoPopup.enabled) return;
    try {
      const hideUntil = localStorage.getItem(HIDE_KEY);
      if (hideUntil && Number(hideUntil) > Date.now()) return;
    } catch {
      // localStorage unavailable — show popup anyway
    }
    setVisible(true);
  }, []);

  const close = () => setVisible(false);

  const hideToday = () => {
    try {
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      localStorage.setItem(HIDE_KEY, String(tomorrow.getTime()));
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  const { badge, titleLines, highlight, items } = siteConfig.promoPopup;

  return (
    <div className="fixed left-3 top-24 z-40 w-[270px] overflow-hidden rounded-2xl shadow-2xl md:left-6 md:top-28 md:w-[300px]">
      <div className="relative bg-[#4A1D2C] px-4 pb-4 pt-6">
        <button
          onClick={close}
          aria-label="팝업 닫기"
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm text-white/80 hover:bg-white/20"
        >
          ✕
        </button>

        <h3 className="text-center text-lg font-black leading-tight text-[#F5C542] md:text-xl">
          {titleLines[0]}
        </h3>
        <h3 className="text-center text-lg font-black leading-tight text-[#F5C542] md:text-xl">
          {titleLines[1]}
        </h3>

        <div className="mx-auto mt-3 w-fit rounded-full bg-[#E85D9E] px-5 py-1.5 text-sm font-bold text-white">
          {badge}
        </div>

        <p className="mt-2 text-center text-lg font-black text-[#4DD9E8] md:text-xl">
          {highlight}
        </p>

        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li
              key={item.normal + item.accent}
              className="flex items-center gap-2 rounded-full bg-white px-3 py-2"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9782E] text-xs font-bold text-white">
                ✓
              </span>
              <span className="text-sm font-bold text-[#2A2A2A]">
                {item.normal}
                <span className="text-[#E63946]">{item.accent}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={hideToday}
        className="block w-full bg-black/30 py-2 text-center text-xs text-white/70 hover:bg-black/40"
      >
        오늘 하루 보지 않기
      </button>
    </div>
  );
}
