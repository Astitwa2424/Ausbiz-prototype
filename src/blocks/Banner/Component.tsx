import type { BannerBlock as BannerBlockProps } from 'src/payload-types'
import { cn } from '@/utilities/ui'
import type React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn('relative w-full min-h-[300px] overflow-hidden', {
          'bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900': style === 'info',
          'bg-gradient-to-r from-red-900 via-red-800 to-red-900': style === 'error',
          'bg-gradient-to-r from-green-900 via-green-800 to-green-900': style === 'success',
          'bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900': style === 'warning',
        })}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-white">
            <RichText data={content} enableGutter={false} enableProse={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
