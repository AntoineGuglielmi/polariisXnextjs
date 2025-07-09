import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { TypeTeaserTag } from '@/types/TypeTeaserTag'

type TeaserTagProps = {
  className?: string
  variant?: 'Trending' | 'Productivity' | 'Talk'
  children?: React.ReactNode
} & TypeTeaserTag

const TeaserTagVariants = cva(
  'TeaserTag typeface-paragraph py-1 px-2 rounded-mini',
  {
    variants: {
      variant: {
        Trending: 'bg-sky-blue',
        Productivity: 'bg-shiny-pink',
        Talk: 'bg-unorganic-green',
      },
    },
    defaultVariants: {
      variant: 'Trending',
    },
  },
)

export default function TeaserTag({ className, label }: TeaserTagProps) {
  return (
    <div
      className={cn(
        TeaserTagVariants({
          variant: label as TeaserTagProps['variant'],
          className,
        }),
      )}
    >
      {label}
    </div>
  )
}
