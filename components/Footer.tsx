import { siteConfig } from "../data/site-config";

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-10 text-center text-xs leading-relaxed text-gray-500 md:text-sm">
      <div className="mx-auto max-w-4xl space-y-2">
        <p>
          © 2026 {siteConfig.business.overview[0].value}. All rights reserved.
        </p>
        <p>
          {siteConfig.business.overview[1].value} | 대표전화: {siteConfig.contact.phone}
        </p>
        <div className="mt-4 space-y-1 text-gray-600">
          <p>
            ※ 본 홍보물에 사용된 이미지, CG, 일러스트 등은 소비자의 이해를 돕기 위한
            이미지컷으로 실제와 다를 수 있습니다.
          </p>
          <p>
            ※ 본 홍보물에 관련된 자세한 사항은 해당 견본주택에 방문하시어 확인하시기
            바랍니다.
          </p>
          <p>
            ※ 아파트 하자 등에 따른 소비자 피해보상은 주택법 시행령 제59조에 따라
            적용됩니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
