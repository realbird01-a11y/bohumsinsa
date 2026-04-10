import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold mb-4" style={{ color: '#1B2A4A' }}>404</p>
      <h1 className="text-xl font-bold text-gray-700 mb-2">페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-500 mb-8">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg text-white font-medium"
        style={{ backgroundColor: '#1B2A4A' }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
