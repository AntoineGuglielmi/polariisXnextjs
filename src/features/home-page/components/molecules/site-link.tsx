import { cn } from '@/lib/utils'
import Link from 'next/link'

type SiteLinkProps = {
  className?: string
  children?: React.ReactNode
  href: string
}

export default function SiteLink({ className, href, children }: SiteLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'SiteLink block bg-purple-100 py-3 px-6 rounded-md',
        className,
      )}
    >
      {children}
    </Link>
  )
}
