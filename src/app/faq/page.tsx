import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ — 보험 & 설계사 질문 모음',
  description: '보험 소비자와 설계사를 위한 FAQ 허브. 실손보험, 암보험, GA 이직, 수수료 등 75개 질문에 답합니다.',
  alternates: { canonical: 'https://bohumsinsa.com/faq' },
}

export default function FaqIndexPage() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#1B2A4A' }}>FAQ</h1>
          <p className="text-gray-600">카테고리를 선택하세요</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link
            href="/faq/insurance"
            className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-[#1B2A4A] transition-all hover:shadow-lg"
          >
            <div className="text-4xl mb-4">🏥</div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-[#1B2A4A] transition-colors" style={{ color: '#1B2A4A' }}>
              보험 FAQ
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              실손보험, 암보험, 보장분석, 종신·연금, 보험금 청구 등 소비자 질문 50개
            </p>
            <p className="mt-4 text-xs font-semibold" style={{ color: '#C9A84C' }}>50개 질문 →</p>
          </Link>
          <Link
            href="/faq/recruit"
            className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-[#1B2A4A] transition-all hover:shadow-lg"
          >
            <div className="text-4xl mb-4">💼</div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-[#1B2A4A] transition-colors" style={{ color: '#1B2A4A' }}>
              설계사 FAQ
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              GA란, GA 이직, 수수료, 디지털 마케팅, PRIMEASSET 331본부 관련 질문 25개
            </p>
            <p className="mt-4 text-xs font-semibold" style={{ color: '#C9A84C' }}>25개 질문 →</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
