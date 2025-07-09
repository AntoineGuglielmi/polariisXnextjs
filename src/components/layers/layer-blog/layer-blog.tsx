import Button from '@/components/atoms/button/button'
import HeadingTag from '@/components/atoms/heading-tag/heading-tag'
import Paragraph from '@/components/atoms/paragraph/paragraph'
import SectionHeading from '@/components/atoms/section-heading/section-heading'
import Subtitle from '@/components/atoms/subtitle/subtitle'
import BlogTeaser from '@/components/molecules/blog-teaser/blog-teaser'
import List from '@/components/molecules/list/list'
import { BLOG_TEASERS } from '@/data/BLOG_TEASERS'
import { cn } from '@/lib/utils'

type LayerBlogProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerBlog({ className }: LayerBlogProps) {
  return (
    <section className={cn('LayerBlog py-28', className)}>
      <div className="LayerBlog__container reg-cont">
        <div className="LayerBlog__content flex flex-col gap-20 items-center">
          <div className="LayerBlog__header flex flex-col gap-4 items-center text-center">
            <div className="LayerBlog__title flex flex-col gap-6 items-center text-center">
              <Subtitle>Cowork Chronicles</Subtitle>
              <SectionHeading>
                Insights, Innovation, and{' '}
                <HeadingTag imageSrc="/images/tag-2.jpg" /> Inspiration
              </SectionHeading>
            </div>
            <Paragraph>
              Stay updated on the latest trends in coworking, productivity tips,
              and success stories that define the Cowork experience.
            </Paragraph>
          </div>

          <div className="LayerBlog__blog flex flex-col gap-16 items-center">
            <List
              className="grid grid-cols-3 gap-8"
              items={BLOG_TEASERS}
              itemComponent={BlogTeaser}
            />
            <Button
              href="/"
              variant="hollow"
              label="View All"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
