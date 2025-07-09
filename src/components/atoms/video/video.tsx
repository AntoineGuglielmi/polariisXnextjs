import { cn } from '@/lib/utils'

type VideoProps = {
  className?: string
  children?: React.ReactNode
  videoSrc: string
}

export default function Video({ className, videoSrc }: VideoProps) {
  return (
    <video
      className={cn('Video ', className)}
      width="320"
      height="240"
      controls
      preload="auto"
    >
      <source src={videoSrc} />
      Your browser does not support the video tag.
    </video>
  )
}
