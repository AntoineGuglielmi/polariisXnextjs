import { cn } from '@/lib/utils'
import List from '../../../../../shared/components/molecules/list/list'
import { NAV_LINKS } from '@/sites/cowork/data/NAV_LINKS'
import NavLink from '@/sites/cowork/components/atoms/nav-link/nav-link'
import { AUTH_LINKS } from '@/sites/cowork/data/AUTH_LINKS'
import Button from '@/sites/cowork/components/atoms/button/button'

type NavProps = {
  className?: string
  children?: React.ReactNode
}

export default function Nav({ className }: NavProps) {
  return (
    <nav className={cn('Nav flex gap-12 py-3.5', className)}>
      <List
        className="Nav__links flex gap-12 items-center"
        items={NAV_LINKS}
        itemComponent={NavLink}
        namespace="sites/cowork"
      />
      <List
        className="Nav__auth flex gap-6"
        items={AUTH_LINKS}
        itemComponent={Button}
        namespace="sites/cowork"
      />
    </nav>
  )
}
