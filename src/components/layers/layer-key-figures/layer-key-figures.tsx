import SectionHeading from '@/components/atoms/section-heading/section-heading'
import Subtitle from '@/components/atoms/subtitle/subtitle'
import KeyFigure from '@/components/molecules/key-figures/key-figure'
import List from '@/components/molecules/list/list'
import { KEY_FIGURES } from '@/data/KEY_FIGURES'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type LayerKeyFiguresProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerKeyFigures({ className }: LayerKeyFiguresProps) {
  return (
    <section className={cn('LayerKeyFigures py-28', className)}>
      <div className="LayerKeyFigures__container reg-cont">
        <div className="LayerKeyFigures__content grid grid-cols-2 gap-20 items-center">
          <div className="LayerKeyFigures__infos flex flex-col gap-8">
            <div className="LayerKeyFigures__header flex flex-col items-start gap-4">
              <Subtitle>Cowork in numbers</Subtitle>
              <SectionHeading className="text-left">
                Transformative Statistics That Speak Volumes
              </SectionHeading>
            </div>
            <List
              className="grid grid-cols-2 gap-6"
              items={KEY_FIGURES}
              itemComponent={KeyFigure}
            />
          </div>

          <div className="LayerKeyFigures__image">
            <div className="relative flex items-center justify-center aspect-square rounded-big overflow-hidden">
              <Image
                src="/images/coworking.jpg"
                height={800}
                width={800}
                alt="Coworking"
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
