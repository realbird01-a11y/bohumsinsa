import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B2A4A' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜드 */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="보험신사" width={32} height={32} className="w-8 h-8 object-contain brightness-200" />
              <span className="text-lg font-bold text-white">보험신사</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              소비자를 위한 보험 정보 전문 브랜드.<br />
              PRIMEASSET 331본부 소속 전문 설계사들의<br />
              지식을 기반으로 합니다.
            </p>
          </div>

          {/* 콘텐츠 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">콘텐츠</h3>
            <ul className="space-y-2">
              <li><Link href="/faq/insurance" className="text-sm text-gray-400 hover:text-white transition-colors">보험 FAQ</Link></li>
              <li><Link href="/faq/recruit" className="text-sm text-gray-400 hover:text-white transition-colors">설계사 FAQ</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">블로그</Link></li>
            </ul>
          </div>

          {/* 안내 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">안내</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">소개</Link></li>
            </ul>
            <p className="mt-6 text-xs text-gray-500 leading-relaxed">
              본 사이트는 보험 정보 제공을 목적으로 운영되며,<br />
              특정 상품의 가입을 권유하지 않습니다.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">© 2026 보험신사. All rights reserved.</p>
          <p className="text-xs text-gray-500">PRIMEASSET 331본부</p>
        </div>
      </div>
    </footer>
  )
}
