import Logo from '@/components/atoms/logo/logo'
import Nav from '@/components/molecules/nav/nav'
import { cn } from '@/lib/utils'

type LayerHeaderProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerHeader({ className }: LayerHeaderProps) {
  return (
    <header className={cn('LayerHeader ', className)}>
      <div className="LayerHeader__container reg-cont">
        <div className="LayerHeader__content flex justify-between items-center">
          <Logo className="h-[1.5em]" />
          <Nav />
        </div>
      </div>
    </header>
  )
}
