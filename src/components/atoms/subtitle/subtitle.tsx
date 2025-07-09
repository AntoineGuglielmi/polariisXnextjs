import { cn } from '@/lib/utils'

type SubtitleProps = {
  className?: string
  children?: React.ReactNode
}

export default function Subtitle({ className, children }: SubtitleProps) {
  return (
    <p className={cn('Subtitle typeface-subtitle', className)}>{children}</p>
  )
}
