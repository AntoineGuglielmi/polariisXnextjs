import HeadingTag from '@/components/atoms/heading-tag/heading-tag'
import SectionHeading from '@/components/atoms/section-heading/section-heading'
import List from '@/components/molecules/list/list'
import WhyChoose from '@/components/molecules/why-choose/why-choose'
import { WHY_CHOOSE } from '@/data/WHY_CHOOSE'
import { cn } from '@/lib/utils'

type ChooseProps = {
  className?: string
  children?: React.ReactNode
}

export default function Choose({ className }: ChooseProps) {
  return (
    <section className={cn('Choose py-28', className)}>
      <div className="Choose__container reg-cont">
        <div className="Choose__content flex flex-col gap-20 items-center">
          <SectionHeading>
            Why Choose <HeadingTag imageSrc="/images/tag-4.jpg" /> Cowork?
          </SectionHeading>
          <List
            items={WHY_CHOOSE}
            itemComponent={WhyChoose}
            className="grid grid-cols-3 gap-12"
          />
        </div>
      </div>
    </section>
  )
}
