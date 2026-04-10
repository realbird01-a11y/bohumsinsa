import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '보험신사 — 소비자를 위한 보험 정보 전문 브랜드',
  alternates: { canonical: 'https://bohumsinsa.com' },
}

const categories = [
  {
    title: '실손보험',
    desc: '4세대 실손 전환, 갱신 보험료, 청구 방법까지 핵심만 정리했습니다.',
    href: '/faq/insurance#실손보험',
    icon: '🏥',
  },
  {
    title: '암보험',
    desc: '진단금 적정 금액, 유사암 차이, 고지의무까지 꼼꼼히 알아보세요.',
    href: '/faq/insurance#암보험',
    icon: '🔬',
  },
  {
    title: '보장분석',
    desc: '내 보험의 보장 공백과 중복을 확인하는 방법을 안내합니다.',
    href: '/faq/insurance#보장분석',
    icon: '📊',
  },
  {
    title: '설계사 정보',
    desc: 'GA 이직, 수수료 구조, 디지털 영업 도구 등 설계사를 위한 정보입니다.',
    href: '/faq/recruit',
    icon: '💼',
  },
]

const stats = [
  { value: '50+', label: '보험 FAQ' },
  { value: '25+', label: '설계사 FAQ' },
  { value: '30+', label: '보험사 비교' },
  { value: '매주', label: '콘텐츠 업데이트' },
]

export default function HomePage() {
  return (
    <>
      {/* 히어로 */}
      <section className="bg-white pt-16 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            CTA 없는 순수 정보 콘텐츠
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: '#1B2A4A' }}>
            보험, 제대로 알고<br />
            <span style={{ color: '#C9A84C' }}>결정하세요</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            보험신사는 PRIMEASSET 331본부 소속 전문 설계사들의 실무 지식을 바탕으로
            소비자가 올바른 보험 결정을 내릴 수 있도록 정확한 정보를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/faq/insurance"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1B2A4A' }}
            >
              보험 FAQ 보기
            </Link>
            <Link
              href="/faq/recruit"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border-2 transition-colors hover:bg-gray-50"
              style={{ borderColor: '#1B2A4A', color: '#1B2A4A' }}
            >
              설계사 FAQ 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 통계 */}
      <section className="py-10 border-y border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold" style={{ color: '#1B2A4A' }}>{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 카테고리 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#1B2A4A' }}>
              카테고리별 보험 정보
            </h2>
            <p className="text-gray-500">궁금한 보험 주제를 선택하세요</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-[#1B2A4A] hover:shadow-md transition-all"
              >
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1B2A4A] transition-colors mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 신뢰 배너 */}
      <section className="py-16 px-4" style={{ backgroundColor: '#1B2A4A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="보험신사" width={56} height={56} className="w-14 h-14 object-contain brightness-200" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            광고 없는 순수 정보 채널
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">
            보험신사는 특정 상품 가입을 유도하거나 광고비를 받지 않습니다.
            금융감독원 및 보험업법 기준에 따른 정확한 정보만 제공합니다.
          </p>
        </div>
      </section>
    </>
  )
}
