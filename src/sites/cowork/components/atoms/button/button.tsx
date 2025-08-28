import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonProps = {
  className?: string
  variant?: 'full' | 'hollow' | 'full-negative'
  children?: React.ReactNode
  href: string
  label: string
}

const ButtonVariants = cva(
  'Button block typeface-button py-3 px-6 rounded-full border border-button-border transition',
  {
    variants: {
      variant: {
        full: 'bg-button-bg-full text-button-text-full',
        'full-negative':
          'bg-button-bg-hollow text-button-text-hollow border-pure-white',
        hollow:
          'bg-button-bg-hollow text-button-text-hollow hover:bg-button-hover-bg-hollow hover:text-button-hover-text-hollow',
      },
    },
    defaultVariants: {
      variant: 'full',
    },
  },
)

export default function Button({
  className,
  variant,
  href,
  label,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(ButtonVariants({ variant, className }))}
    >
      {label}
    </Link>
  )
}
