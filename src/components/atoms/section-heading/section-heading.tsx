import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  className?: string
  children?: React.ReactNode
}

export default function SectionHeading({
  className,
  children,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        'SectionHeading typeface-heading-2 text-balance max-w-3xl text-center',
        className,
      )}
    >
      {children}
    </h2>
  )
}
