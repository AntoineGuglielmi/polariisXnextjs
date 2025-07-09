import Paragraph from '@/components/atoms/paragraph/paragraph'
import SectionHeading from '@/components/atoms/section-heading/section-heading'
import Subtitle from '@/components/atoms/subtitle/subtitle'
import Accordion from '@/components/molecules/accordion/accordion'
import { FAQS } from '@/data/FAQS'
import { cn } from '@/lib/utils'

type LayerFaqProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerFaq({ className }: LayerFaqProps) {
  return (
    <section className={cn('LayerFaq py-28', className)}>
      <div className="LayerFaq__container reg-cont">
        <div className="LayerFaq__content grid grid-cols-[2fr_3fr] gap-8">
          <div className="LayerFaq__text flex flex-col gap-6">
            <div className="LayerFaq__header flex flex-col gap-4 items-start">
              <Subtitle>Frequently Ask Questions</Subtitle>
              <SectionHeading className="text-left">
                Your Roadmap to Coworking Clarity
              </SectionHeading>
            </div>
            <Paragraph className="text-balance">
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </Paragraph>
          </div>
          <div className="LayerFaq__faq">
            <Accordion FAQs={FAQS} />
          </div>
        </div>
      </div>
    </section>
  )
}
