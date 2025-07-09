import Paragraph from '@/components/atoms/paragraph/paragraph'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as AAccordion,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { TypeFAQ } from '@/types/TypeFAQ'

type AccordionProps = {
  className?: string
  children?: React.ReactNode
  FAQs: Array<TypeFAQ>
}

export default function Accordion({ className, FAQs }: AccordionProps) {
  return (
    <AAccordion
      type="single"
      collapsible
      className={cn('Accordion ', className)}
    >
      {FAQs.map(({ question, answer }, index) => {
        return (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="py-5 flex flex-col gap-2"
          >
            <AccordionTrigger className="py-2">{question}</AccordionTrigger>
            <AccordionContent>
              <Paragraph className="text-balance">{answer}</Paragraph>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </AAccordion>
  )
}
