import type { Metadata } from 'next'
import { faqInsurance, insuranceCategories } from '@/data/faq-insurance'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: '보험 FAQ 50개 — 실손·암·보장분석·종신·연금',
  description:
    '실손보험, 암보험, 보장분석, 종신보험, 연금, 보험금 청구까지 보험 소비자가 가장 많이 묻는 질문 50개에 답합니다.',
  alternates: { canonical: 'https://bohumsinsa.com/faq/insurance' },
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqInsurance.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function InsuranceFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* 헤더 */}
      <section className="bg-gray-50 py-16 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            Insurance FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1B2A4A' }}>
            보험 FAQ
          </h1>
          <p className="text-gray-600">
            소비자가 가장 많이 묻는 보험 질문 <strong>50개</strong>에 전문 설계사가 답합니다.
          </p>
        </div>
      </section>

      {/* 카테고리별 FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {insuranceCategories.map((category) => {
            const items = faqInsurance.filter((f) => f.category === category)
            if (items.length === 0) return null
            return (
              <div key={category} id={category}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xl font-bold" style={{ color: '#1B2A4A' }}>
                    {category}
                  </h2>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {items.length}개
                  </span>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 px-5">
                  <FaqAccordion items={items} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 안내 */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            본 FAQ는 일반적인 정보 제공 목적이며, 개인의 구체적인 상황에 따라 다를 수 있습니다.<br />
            중요한 보험 결정은 전문 설계사 상담을 병행하시기 바랍니다. (2026년 기준)
          </p>
        </div>
      </section>
    </>
  )
}
