import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://bohumsinsa.com'),
  title: {
    default: '보험신사 — 소비자를 위한 보험 정보 전문 브랜드',
    template: '%s | 보험신사',
  },
  description:
    '보험신사는 실손보험, 암보험, 보장분석 등 보험 정보를 전문적으로 제공하는 콘텐츠 브랜드입니다. PRIMEASSET 331본부 소속 전문 설계사들의 지식을 기반으로 합니다.',
  keywords: ['보험신사', '보험 정보', '실손보험', '암보험', '보장분석', 'GA', '법인보험대리점'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://bohumsinsa.com',
    siteName: '보험신사',
    title: '보험신사 — 소비자를 위한 보험 정보 전문 브랜드',
    description: '보험신사는 실손보험, 암보험, 보장분석 등 보험 정보를 전문적으로 제공하는 콘텐츠 브랜드입니다.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  verification: {
    google: 'b-VSYROVc5yvSGi2n62aerIHfcgN_sEDRXO2kuBd6Ig',
    other: { 'naver-site-verification': ['bb97f3002438f7bac9cc04629da91069611dc8d8'] },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://bohumsinsa.com',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '보험신사',
  alternateName: ['Bohumsinsa', 'Insurance Shinsa'],
  description:
    '소비자를 위한 보험 상품 비교·분석 전문 콘텐츠 브랜드로, PRIMEASSET 331본부 소속 전문 설계사들의 지식을 기반으로 보험 정보를 제공합니다.',
  url: 'https://bohumsinsa.com',
  logo: 'https://bohumsinsa.com/logo.png',
  sameAs: [
    'https://blog.naver.com/bohumsinsa',
    'https://www.wikidata.org/wiki/Q139105427',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'PRIMEASSET 331본부',
    sameAs: 'https://www.wikidata.org/wiki/Q139102791',
  },
  founder: {
    '@type': 'Person',
    name: '이우형',
    jobTitle: 'PRIMEASSET 331 본부장',
  },
  areaServed: 'KR',
  knowsAbout: ['보험', '실손보험', '암보험', '보장분석', 'GA', '법인보험대리점'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
