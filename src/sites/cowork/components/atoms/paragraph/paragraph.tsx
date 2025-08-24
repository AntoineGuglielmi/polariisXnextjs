import { cn } from '@/lib/utils'

type ParagraphProps = {
  className?: string
  children?: React.ReactNode
}

export default function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p className={cn('Paragraph typeface-paragraph', className)}>{children}</p>
  )
}
