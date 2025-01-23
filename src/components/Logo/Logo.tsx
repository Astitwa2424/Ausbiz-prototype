import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      src="https://media.licdn.com/dms/image/v2/C4E0BAQGKGA1GyNOftw/company-logo_200_200/company-logo_200_200/0/1658570032831?e=1745452800&v=beta&t=8GmNYzt9ewLfInUJno9CrZDEQdZabNJJL17_OeBsDdI"
    />
  )
}
