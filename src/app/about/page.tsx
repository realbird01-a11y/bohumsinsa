import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '소개',
  description:
    '보험신사는 PRIMEASSET 331본부 소속 전문 설계사들의 실무 지식을 바탕으로 소비자와 설계사 모두를 위한 보험 정보를 제공합니다.',
  alternates: { canonical: 'https://bohumsinsa.com/about' },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '이우형',
  jobTitle: 'PRIMEASSET 331본부 본부장',
  worksFor: {
    '@type': 'Organization',
    name: 'PRIMEASSET 331본부',
  },
  knowsAbout: ['보험', 'GA', '법인보험대리점', '보장분석', 'AI 보험 시스템'],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* 헤더 */}
      <section className="bg-gray-50 py-16 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1B2A4A' }}>
            보험신사 소개
          </h1>
          <p className="text-gray-600 leading-relaxed">
            소비자를 위한 보험 정보 전문 콘텐츠 브랜드
          </p>
        </div>
      </section>

      {/* 브랜드 소개 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="보험신사 로고"
              width={96}
              height={96}
              className="w-24 h-24 object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#1B2A4A' }}>
            보험신사란?
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>보험신사(Bohumsinsa)</strong>는 소비자가 보험 상품을 올바르게 이해하고
              합리적인 결정을 내릴 수 있도록 돕는 보험 정보 전문 콘텐츠 브랜드입니다.
            </p>
            <p>
              32개 보험사를 비교분석하고 소비자를 위한 올바르고 정직한 보험 정보를 제공합니다.
              실손보험, 암보험, 보장분석, GA 정보 등 보험과 관련된 다양한 주제를 다룹니다.
            </p>
            <p>
              보험신사는 특정 상품 가입을 유도하거나 광고비를 받지 않습니다.
              금융감독원 및 보험업법 기준에 따른 정확한 정보 제공을 원칙으로 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 운영 원칙 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#1B2A4A' }}>
            운영 원칙
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: '정확한 정보',
                desc: '금융감독원 및 보험업법 기준으로 검증된 정보만 제공합니다.',
              },
              {
                icon: '🚫',
                title: '광고 없음',
                desc: '특정 상품 가입 유도, 상담 연결, 광고비 수취를 하지 않습니다.',
              },
              {
                icon: '🔄',
                title: '정기 업데이트',
                desc: '보험 제도 변경 및 최신 정보를 반영하여 주기적으로 업데이트합니다.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold mb-2" style={{ color: '#1B2A4A' }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 수상 */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#1B2A4A' }}>
            공인 인증
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
            <div className="text-5xl flex-shrink-0">🏆</div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-600 mb-1">
                2025 대한민국 고객만족도 1위
              </p>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1B2A4A' }}>
                보험 유튜브 부문
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                스포츠서울 주최, 한국에스미디어 주관. 2025년 4월 30일 공식 인증.
                유튜브 구독자 5.8만, 연간 195만 조회수를 기반으로 선정되었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 운영자 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#1B2A4A' }}>
            운영 조직
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-gray-50 rounded-2xl p-8">
            <div className="flex-shrink-0">
              <Image
                src="/character.jpg"
                alt="이우형 PRIMEASSET 331 본부장"
                width={120}
                height={120}
                className="w-28 h-28 rounded-full object-cover object-top border-4 border-white shadow-md"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                PRIMEASSET 331본부
              </p>
              <h3 className="text-xl font-bold mb-1" style={{ color: '#1B2A4A' }}>
                이우형 본부장
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                PRIMEASSET 331본부를 이끌며 AI 기반 보험 업무 자동화 및
                디지털 마케팅 시스템을 구축하고 있습니다.
                보험신사는 본부의 전문 설계사 지식을 소비자와 연결하는 정보 채널입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
