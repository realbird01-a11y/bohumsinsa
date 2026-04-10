import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '블로그 — 보험신사 콘텐츠 허브',
  description: '보험신사의 보험 정보 블로그 허브. 네이버 블로그, 티스토리 등 외부 채널 콘텐츠를 모아봅니다.',
  alternates: { canonical: 'https://bohumsinsa.com/blog' },
}

const channels = [
  {
    name: '네이버 블로그',
    desc: '실손보험, 암보험, 보장분석 등 심층 보험 정보 콘텐츠',
    icon: '📝',
    href: 'https://blog.naver.com/bohumsinsa',
  },
  {
    name: '티스토리',
    desc: '보험 분석 칼럼과 데이터 기반 보험 정보',
    icon: '🔍',
    href: '#',
  },
  {
    name: 'PRIMEASSET 331본부 블로그',
    desc: '설계사를 위한 GA 정보, 디지털 영업, 커리어 콘텐츠',
    icon: '💼',
    href: '#',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* 헤더 */}
      <section className="bg-gray-50 py-16 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1B2A4A' }}>
            블로그
          </h1>
          <p className="text-gray-600">보험신사 콘텐츠 채널 모음</p>
        </div>
      </section>

      {/* 채널 목록 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          {channels.map((ch) => (
            <Link
              key={ch.name}
              href={ch.href}
              target={ch.href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-xl border border-gray-200 hover:border-[#1B2A4A] hover:shadow-md transition-all group"
            >
              <span className="text-3xl flex-shrink-0">{ch.icon}</span>
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 group-hover:text-[#1B2A4A] transition-colors mb-1">
                  {ch.name}
                </h2>
                <p className="text-sm text-gray-500">{ch.desc}</p>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-[#1B2A4A] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* 콘텐츠 준비중 안내 */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            보험신사 블로그 콘텐츠는 순차적으로 업로드됩니다.
          </p>
        </div>
      </section>
    </>
  )
}
