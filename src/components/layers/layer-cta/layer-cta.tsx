/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/atoms/button/button'
import HeadingTag from '@/components/atoms/heading-tag/heading-tag'
import Paragraph from '@/components/atoms/paragraph/paragraph'
import { cn } from '@/lib/utils'

type LayerCtaProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerCta({ className }: LayerCtaProps) {
  return (
    <section className={cn('LayerCta py-28', className)}>
      <div className="LayerCta__container reg-cont">
        <div className="LayerCta__content flex flex-col gap-6 text-balance items-center text-center">
          <h3 className="typeface-heading-1">
            Seize <HeadingTag imageSrc="/images/tag-3.jpg" /> The Moment - Join
            Cowork Today!
          </h3>

          <Paragraph>
            Uncover the transformative power of Cowork as echoed by those who've
            made it their professional haven. This is more than finding a desk;
            it's discovering a community that fuels your journey to success.
          </Paragraph>

          <Button
            href="/"
            label="Claim Your Spot"
            variant="full"
          />
        </div>
      </div>
    </section>
  )
}
