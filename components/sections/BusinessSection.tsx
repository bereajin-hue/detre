import { siteConfig } from "../../data/site-config";

export default function BusinessSection() {
  const { overview, sellingPoints } = siteConfig.business;

  return (
    <section id="business" className="bg-navy py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-gold md:mb-16 md:text-4xl">
          사업개요
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <table className="w-full border-collapse">
              <tbody>
                {overview.map((row) => (
                  <tr key={row.label} className="border-b border-white/10">
                    <th className="w-1/3 py-4 pr-4 text-left align-top text-sm font-semibold text-gold md:text-base">
                      {row.label}
                    </th>
                    <td className="py-4 text-left text-sm text-white md:text-base">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sellingPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold/50"
              >
                <div className="mb-3 text-3xl">{point.icon}</div>
                <h3 className="mb-2 text-base font-bold text-gold md:text-lg">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
