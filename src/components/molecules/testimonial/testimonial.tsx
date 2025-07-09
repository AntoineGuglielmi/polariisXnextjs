/* eslint-disable react/no-unescaped-entities */
import Paragraph from '@/components/atoms/paragraph/paragraph'
import Subtitle from '@/components/atoms/subtitle/subtitle'
import { match } from '@/lib/mines'
import { cn } from '@/lib/utils'
import { TypeTestimonial } from '@/types/TypeTestimonial'
import Image from 'next/image'

type TestimonialProps = {
  className?: string
  children?: React.ReactNode
} & TypeTestimonial

export default function Testimonial({
  className,
  name,
  testimonial,
  color = 'unorganic-green',
  imageSrc,
  job,
}: TestimonialProps) {
  const computedTestimonialBgColor = match(color, {
    'unorganic-green': 'bg-unorganic-green',
    'powerless-grey': 'bg-powerless-grey',
    'sky-blue': 'bg-sky-blue',
    'shiny-pink': 'bg-shiny-pink',
    'almost-orange': 'bg-almost-orange',
  })

  return (
    <div
      className={cn(
        'Testimonial p-8 flex flex-col gap-6 rounded-small text-center items-center',
        computedTestimonialBgColor,
        className,
      )}
    >
      <div className="Testimonial__avatar relative h-14 w-14 rounded-full flex items-center justify-center overflow-hidden">
        <Image
          className="absolute w-full h-full object-cover"
          src={imageSrc}
          height={60}
          width={60}
          alt="Testimonial avatar"
        />
      </div>

      <Paragraph className="Testimonial__testimonial text-balance max-w-72">
        "{testimonial}"
      </Paragraph>

      <div className="Testimonials__footer flex flex-col items-center text-center">
        <Subtitle>{name}</Subtitle>
        <Paragraph>{job}</Paragraph>
      </div>
    </div>
  )
}
