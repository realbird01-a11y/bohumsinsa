'use client'

import { useState } from 'react'
import type { FaqItem } from '@/data/faq-insurance'

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              className="w-full flex items-start justify-between gap-4 py-5 text-left"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-gray-900 leading-snug">{item.question}</span>
              <span
                className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: isOpen ? '#1B2A4A' : '#F3F4F6' }}
              >
                <svg
                  className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke={isOpen ? 'white' : '#6B7280'}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="pb-5 pr-9">
                <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
