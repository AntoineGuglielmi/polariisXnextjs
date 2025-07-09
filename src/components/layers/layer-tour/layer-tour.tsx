import Button from '@/components/atoms/button/button'
import HeadingTag from '@/components/atoms/heading-tag/heading-tag'
import Paragraph from '@/components/atoms/paragraph/paragraph'
import SectionHeading from '@/components/atoms/section-heading/section-heading'
import Subtitle from '@/components/atoms/subtitle/subtitle'
import Video from '@/components/atoms/video/video'
import { cn } from '@/lib/utils'

type LayerTourProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerTour({ className }: LayerTourProps) {
  return (
    <section className={cn('LayerTour py-28', className)}>
      <div className="LayerTour__container reg-cont">
        <div className="LayerTour__content flex flex-col items-center gap-20 text-center">
          <div className="LayerTour__opening flex flex-col items-center gap-6 text-center">
            <div className="LayerTour__header flex flex-col items-center gap-4">
              <Subtitle>A virtual tour</Subtitle>
              <SectionHeading>
                Explore Cowork Through Our{' '}
                <HeadingTag imageSrc="/images/tag-1.jpg" /> Lens
              </SectionHeading>
            </div>
            <Paragraph>
              Experience the essence of Cowork before setting foot in our
              dynamic spaces. Our immersive video tour gives you a sneak peek
              into the vibrant atmosphere, cutting-edge facilities, and
              collaborative energy that define the Cowork experience.
            </Paragraph>
            <Button
              href="/"
              label="Explore Spaces"
              variant="hollow"
            />
          </div>

          <div className="LayerTour__video w-full rounded-big overflow-hidden">
            <Video
              className="w-full"
              videoSrc="/videos/office-life.mp4"
            ></Video>
          </div>
        </div>
      </div>
    </section>
  )
}
