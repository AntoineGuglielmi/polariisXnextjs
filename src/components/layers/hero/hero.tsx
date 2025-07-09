import Button from '@/components/atoms/button/button'
import Circle from '@/components/atoms/circle/circle'
import Logo from '@/components/atoms/logo/logo'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type HeroProps = {
  className?: string
  children?: React.ReactNode
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={cn('Hero py-16 md:py-28 text-balance', className)}>
      <div className="Hero__container reg-cont">
        <div className="Hero__content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="Hero__text flex flex-col gap-8 items-start">
            <h1 className="typeface-heading-1">
              Elevate Your Workspace with
              <span className="relative h-[1em] inline-flex items-center ml-[0.25em]">
                <Logo className="z-10 relative top-[1px]" />
                <Circle className="absolute -z-10 text-circle-green" />
              </span>
            </h1>
            <h2 className="typeface-paragraph">
              Welcome to Cowork – where innovation meets collaboration in the
              heart of productivity! Unleash 🚀 your potential in our
              thoughtfully designed coworking spaces, tailored to inspire
              creativity and foster connections.
            </h2>
            <Button
              label="Claim your spot"
              href="/"
              variant="full"
            />
          </div>

          <div className="Hero__image rounded-big aspect-square overflow-hidden relative">
            <Image
              src="/images/hero-bg.jpg"
              fill
              alt="Coworking"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
