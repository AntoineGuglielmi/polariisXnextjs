import { cn } from '@/lib/utils'
import Image from 'next/image'

type HeadingTagProps = {
  className?: string
  children?: React.ReactNode
  imageSrc?: string
}

export default function HeadingTag({
  className,
  imageSrc = '/images/hero-bg.jpg',
}: HeadingTagProps) {
  return (
    <span
      className={cn(
        'HeadingTag h-[1em] w-[3.1em] inline-flex items-center justify-center relative top-2 rounded-full overflow-hidden',
        className,
      )}
    >
      <Image
        src={imageSrc}
        height={200}
        width={400}
        alt="Heading tag image"
        className="absolute w-full h-full object-cover"
      />
    </span>
  )
}
