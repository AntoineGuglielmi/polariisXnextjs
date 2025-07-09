import SectionHeading from '@/components/atoms/section-heading/section-heading'
import Subtitle from '@/components/atoms/subtitle/subtitle'
import List from '@/components/molecules/list/list'
import Testimonial from '@/components/molecules/testimonial/testimonial'
import { TESTIMONIALS } from '@/data/TESTIMONIALS'
import { cn } from '@/lib/utils'

type LayerTestimonialsProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerTestimonials({
  className,
}: LayerTestimonialsProps) {
  return (
    <section className={cn('LayerTestimonials py-28', className)}>
      <div className="LayerTestimonials__container reg-cont">
        <div className="LayerTestimonials__content flex flex-col gap-8">
          <div className="LayerTestimonials__header flex flex-col gap-4 items-center">
            <Subtitle>Cowork in words</Subtitle>
            <SectionHeading>Hear It From Our Clients</SectionHeading>
          </div>

          <div className="LayerTestimonials__testimonials">
            <List
              className="flex flex-wrap gap-12 justify-center"
              items={TESTIMONIALS}
              itemComponent={Testimonial}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
