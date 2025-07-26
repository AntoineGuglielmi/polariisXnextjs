import Logo from '@/components/atoms/logo/logo'
import Nav from '@/components/molecules/nav/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type LayerHeaderProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerHeader({ className }: LayerHeaderProps) {
  return (
    <header className={cn('LayerHeader ', className)}>
      <div className="LayerHeader__container reg-cont">
        <div className="LayerHeader__content flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center"
          >
            <Logo className="h-[1.5em]" />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  )
}
