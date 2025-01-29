'use client'

import React from 'react'
import Link from 'next/link'
import { useSidebar } from '@/components/ui/sidebar'

export const Banner = () => {
  const { state } = useSidebar()

  return (
    <div
      className={`fixed top-0 z-50 bg-white border-b border-gray-200 py-4 px-6 transition-all duration-300 ease-in-out
        ${state === 'expanded' ? 'left-[var(--sidebar-width)]' : 'left-0'}
        right-0`}
    >
      <div className="flex justify-between items-center">
        {/* Logo and Text */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">
            <span className="text-4xl font-extrabold text-red-600 block">Aus Biz</span>
            <span className="text-3xl font-light text-black block">Consulting</span>
          </h1>
        </div>

        {/* Contact Button */}
        <Link
          href="https://ausbiz-prototype.vercel.app/contact-us"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
