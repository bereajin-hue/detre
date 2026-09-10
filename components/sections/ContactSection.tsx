import { siteConfig } from "../../data/site-config";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-[60vh] flex-col items-center justify-center bg-navy px-4 py-20 text-center"
    >
      <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">문의하기</h2>
      <p className="mb-10 text-sm text-gray-400 md:text-base">
        분양 문의 및 방문 예약은 아래 번호로 연락해 주세요.
      </p>
      <a
        href={siteConfig.contact.telLink}
        className="rounded-full bg-gold px-10 py-5 text-lg font-bold text-navy shadow-2xl transition-transform hover:scale-105 md:text-xl"
      >
        📞 {siteConfig.contact.phone} 상담예약
      </a>
    </section>
  );
}
