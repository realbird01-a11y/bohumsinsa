import type { Metadata } from 'next'
import { faqRecruit, recruitCategories } from '@/data/faq-recruit'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: '설계사 FAQ 25개 — GA 이직·수수료·디지털 영업',
  description:
    'GA란 무엇인지, GA 이직 시 확인할 사항, 수수료 구조, 디지털 마케팅 지원까지 보험 설계사를 위한 질문 25개에 답합니다.',
  alternates: { canonical: 'https://bohumsinsa.com/faq/recruit' },
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqRecruit.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function RecruitFaqPage() {
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
            Agent FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1B2A4A' }}>
            설계사 FAQ
          </h1>
          <p className="text-gray-600">
            GA 이직·수수료·디지털 영업에 관한 설계사 질문 <strong>25개</strong>에 답합니다.
          </p>
        </div>
      </section>

      {/* 카테고리별 FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {recruitCategories.map((category) => {
            const items = faqRecruit.filter((f) => f.category === category)
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
            본 FAQ는 일반적인 정보 제공 목적이며, PRIMEASSET 331본부의 구체적인 지원 조건은<br />
            상담을 통해 확인하시기 바랍니다. (2026년 기준)
          </p>
        </div>
      </section>
    </>
  )
}
