import Paragraph from '@/components/atoms/paragraph/paragraph'
import TeaserTag from '@/components/atoms/teaser-tag/teaser-tag'
import { cn } from '@/lib/utils'
import { TypeBlogTeaser } from '@/types/TypeBlogTeaser'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import List from '../list/list'

type BlogTeaserProps = {
  className?: string
  children?: React.ReactNode
} & TypeBlogTeaser

export default function BlogTeaser({
  className,
  duration,
  imageSrc,
  tags,
  title,
}: BlogTeaserProps) {
  return (
    <article className={cn('BlogTeaser flex flex-col gap-6', className)}>
      <div className="BlogTeaser__image h-80 rounded-small overflow-hidden relative">
        <Image
          src={imageSrc}
          height={300}
          width={450}
          alt="Blog teaser"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="BlogTeaser__infos flex gap-4 items-center">
        <div className="BlogTeaser__tags">
          <List
            items={tags}
            itemComponent={TeaserTag}
            className="inline-flex gap-2"
          />
        </div>
        <Paragraph className="BlogTeaser__duration">
          {duration} min read
        </Paragraph>
      </div>
      <h3 className="BlogTeaser__title typeface-heading-3">{title}</h3>
      <Link
        href="/"
        className="flex items-center gap-2"
      >
        Read more <ChevronRight />
      </Link>
    </article>
  )
}
