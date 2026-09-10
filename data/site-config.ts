export const siteConfig = {

  // ─── SEO ──────────────────────────────────────────────
  meta: {
    title: "동탄역 디에트르 퍼스티지 | 공식 분양 홈페이지",
    description:
      "동탄역 GTX-A 초역세권 주거용 오피스텔. 동탄역 디에트르 퍼스티지 75·84㎡ 총 323실, 즉시 입주 가능. 대방건설 시공 프리미엄 오피스텔 공식 분양 홈페이지.",
    keywords:
      "동탄역 디에트르 퍼스티지, 동탄 디에트르 오피스텔, 동탄역 주거용 오피스텔, 동탄 디에트르 분양가, 동탄역 오피스텔 분양, 대방건설 동탄, GTX-A 동탄역 오피스텔",
    canonical: "https://detre.aptmh.kr",
    ogImage: "/og-image.jpg",
    naverVerification: "",
    googleVerification: "",
  },

  // ─── 헤더 ──────────────────────────────────────────────
  header: {
    logo: "/logo.png",
    projectName: "Detre Firstige",
    phone: "1599-1877",
    gnb: [
      { label: "사업개요", href: "#business" },
      { label: "입지안내", href: "#location" },
      { label: "상품안내", href: "#product" },
      { label: "컨텍트", href: "#contact" },
    ],
  },

  // ─── 히어로 배너 ────────────────────────────────────────
  hero: {
    slides: [
      {
        image: "/images/hero-01.jpg",
        alt: "동탄역 디에트르 퍼스티지 단지 조감도",
        title: "동탄역 디에트르 퍼스티지",
        subtitle: "GTX-A 동탄역 초역세권 프리미엄 주거용 오피스텔",
      },
      {
        image: "/images/hero-02.jpg",
        alt: "동탄역 디에트르 퍼스티지 건물 외관",
        title: "The Valuable LIFESTYLE",
        subtitle: "동탄2신도시 마지막 프리미엄 랜드마크 · 즉시 입주 가능",
      },
    ],
  },

  // ─── 사업개요 ───────────────────────────────────────────
  business: {
    overview: [
      { label: "사업명", value: "동탄2신도시 동탄역 대방 디에트르 퍼스티지" },
      { label: "위치", value: "경기도 화성시 동탄2신도시 일원" },
      { label: "유형", value: "주거용 오피스텔" },
      { label: "공급규모", value: "총 323실 (75㎡ · 84㎡)" },
      { label: "시공사", value: "대방건설" },
      { label: "시행사", value: "대방건설부동산신탁(주)" },
      { label: "입주", value: "즉시 입주 가능 (2025년 2월 신축)" },
    ],
    sellingPoints: [
      {
        icon: "🚄",
        title: "GTX-A 동탄역 초역세권",
        desc: "GTX-A 개통으로 서울까지 초급행 연결, 동탄역 직접 연결",
      },
      {
        icon: "🏢",
        title: "광역 비즈니스 복합단지",
        desc: "삼성SDI 오피스·업무시설·배달점·호텔·주거·컨벤션 복합단지",
      },
      {
        icon: "🛋️",
        title: "호텔 수준의 고급 마감재",
        desc: "광폭마루·비닥·엔지니어드 스톤 주방·백색인테리어 판넬",
      },
      {
        icon: "🏊",
        title: "아파트 공동 커뮤니티",
        desc: "531세대 아파트와 커뮤니티 공동 이용, 피트니스·골프연습장",
      },
    ],
  },

  // ─── 입지안내 ───────────────────────────────────────────
  location: {
    image: "/images/location.jpg",
    alt: "동탄역 디에트르 퍼스티지 광역위치도 GTX-A 동탄역",
    points: [
      { icon: "🚄", text: "GTX-A · SRT · 인덕원선 · 동탄트램 2개 노선 쿼드러플 초역세권" },
      { icon: "🛣️", text: "경부고속도로 지하화 및 동탄 동·서 연결도로 신설" },
      { icon: "🌳", text: "오산천 중심 대규모 여울공원 · 힐링 라이프스타일" },
      { icon: "🏭", text: "삼성SDI 등 배후 업무수요 풍부한 광역 비즈니스 입지" },
    ],
    youtube: {
      url: "https://www.youtube.com/watch?v=r5GaNtME9cw",
      embedId: "r5GaNtME9cw",
      title: "동탄역 디에트르 퍼스티지 홍보영상",
    },
  },

  // ─── 상품안내 ───────────────────────────────────────────
  product: {
    sitePlan: {
      image: "/images/site-plan.jpg",
      alt: "동탄역 디에트르 퍼스티지 단지 배치도 조감도",
    },
    floorPlan: {
      image: "/images/floor-plan.jpg",
      alt: "동탄역 디에트르 퍼스티지 단지평면도 주거용 오피스텔 104동 삼성SDI",
    },
    community: {
      image: "/images/community.jpg",
      alt: "동탄역 디에트르 퍼스티지 커뮤니티시설 피트니스 스크린골프 키즈룸 북카페",
      facilities: ["스크린골프연습장", "GX룸", "피트니스센터", "키즈룸", "북카페", "독서실", "사우나", "목욕탕"],
    },
    units: [
      {
        type: "75㎡ 0A",
        badge: "75A",
        color: "#C0385A",
        count: "43실",
        exclusive: "75.81㎡",
        supply: "109.05㎡",
        contract: "161.50㎡",
        planImage: "/images/plan-75a.jpg",
        planAlt: "동탄역 디에트르 퍼스티지 75A형 평면도 전용 75.81㎡",
      },
      {
        type: "84㎡ 0A",
        badge: "84A",
        color: "#3B6CB7",
        count: "92실",
        exclusive: "84.99㎡",
        supply: "120.90㎡",
        contract: "179.13㎡",
        planImage: "/images/plan-84a.jpg",
        planAlt: "동탄역 디에트르 퍼스티지 84A형 평면도 전용 84.99㎡",
      },
      {
        type: "84㎡ 0B",
        badge: "84B",
        color: "#D4682A",
        count: "188실",
        exclusive: "84.97㎡",
        supply: "120.27㎡",
        contract: "178.24㎡",
        planImage: "/images/plan-84b.jpg",
        planAlt: "동탄역 디에트르 퍼스티지 84B형 평면도 전용 84.97㎡",
      },
    ],
  },

  // ─── 컨텍트 ────────────────────────────────────────────
  contact: {
    phone: "1599-1877",
    telLink: "tel:15991877",
    label: "분양 문의 · 방문 예약",
  },
};

export type SiteConfig = typeof siteConfig;
