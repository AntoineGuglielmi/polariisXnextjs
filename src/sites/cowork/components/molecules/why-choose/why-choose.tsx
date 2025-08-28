import { cn } from '@/lib/utils'
import { TypeWhyChoose } from '@/sites/cowork/types/TypeWhyChoose'
import dynamic from 'next/dynamic'

type WhyChooseProps = {
  className?: string
  children?: React.ReactNode
} & TypeWhyChoose

export default function WhyChoose({
  className,
  description,
  icon,
  title,
  ellipseColor,
}: WhyChooseProps) {
  const Icon = dynamic<{ ellipseColor: string }>(
    () => import(`@/sites/cowork/components/atoms/why-choose-logos/${icon}`),
  )
  return (
    <article
      className={cn('WhyChoose flex flex-col gap-6 items-center', className)}
    >
      <Icon {...{ ellipseColor }} />
      <h3 className="typeface-heading-3">{title}</h3>
      <p className="typeface-paragraph text-center">{description}</p>
    </article>
  )
}
