import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ComponentProps } from 'react'

type NavLinkProps = {
  className?: string
  children?: React.ReactNode
  href: string
  label: string
} & ComponentProps<'a'>

export default function NavLink({
  className,
  href,
  label,
  ...aProps
}: NavLinkProps) {
  return (
    <Link
      href={href}
      {...aProps}
      className={cn('NavLink typeface-paragraph', className)}
    >
      {label}
    </Link>
  )
}
