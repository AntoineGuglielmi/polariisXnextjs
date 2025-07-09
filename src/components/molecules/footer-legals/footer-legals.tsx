import { cn } from '@/lib/utils'
import Link from 'next/link'

type FooterLegalsProps = {
  className?: string
  children?: React.ReactNode
}

export default function FooterLegals({ className }: FooterLegalsProps) {
  return (
    <div
      className={cn(
        'FooterLegals flex items-center justify-between typeface-paragraph w-full max-w-[initial]',
        className,
      )}
    >
      <p>© 2024 Cowork. All rights reserved.</p>
      <ul className="flex gap-6">
        <li>
          <Link href="/">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/">Terms of Service</Link>
        </li>
        <li>
          <Link href="/">Cookies Settings</Link>
        </li>
      </ul>
    </div>
  )
}
