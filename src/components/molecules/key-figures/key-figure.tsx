import Paragraph from '@/components/atoms/paragraph/paragraph'
import SectionHeading from '@/components/atoms/section-heading/section-heading'
import { match } from '@/lib/mines'
import { cn } from '@/lib/utils'
import { TypeKeyFigure } from '@/types/TypeKeyFigue'

type KeyFigureProps = {
  className?: string
  children?: React.ReactNode
} & TypeKeyFigure

export default function KeyFigure({
  className,
  number,
  caption,
  ellipseColor = 'unorganic-green',
  unity,
}: KeyFigureProps) {
  const computedEllipseColor = match(ellipseColor, {
    'unorganic-green': 'bg-unorganic-green',
    'sky-blue': 'bg-sky-blue',
    'shiny-pink': 'bg-shiny-pink',
    'almost-orange': 'bg-almost-orange',
  })
  return (
    <article className={cn('KeyFigure ', className)}>
      <div className="KeyFigure__main relative inline-flex">
        <div
          className={`h-9 w-9 rounded-full absolute -z-10 top-1/3 right-8 ${computedEllipseColor}`}
        />
        <SectionHeading className="text-left">
          {number}
          {unity}
        </SectionHeading>
      </div>
      <div className="KeyFigure__caption">
        <Paragraph>{caption}</Paragraph>
      </div>
    </article>
  )
}
