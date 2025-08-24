import { FOOTER_LINKS } from '@/sites/cowork/data/FOOTER_LINKS'
import { cn } from '@/lib/utils'
import List from '../../../../../shared/components/molecules/list/list'
import NavLink from '@/sites/cowork/components/atoms/nav-link/nav-link'

type FooterNavProps = {
  className?: string
  children?: React.ReactNode
}

export default function FooterNav({ className }: FooterNavProps) {
  return (
    <div className={cn('FooterNav grid grid-cols-3', className)}>
      {FOOTER_LINKS.map(({ title, links }) => {
        return (
          <section
            key={title}
            className="flex flex-col gap-6"
          >
            <h4 className="typeface-paragraph-upper text-pure-white">
              {title}
            </h4>
            <List
              itemComponent={NavLink}
              items={links.map((link) => ({
                ...link,
                className: 'text-pure-white',
              }))}
              className="flex flex-col gap-6"
              namespace="sites/cowork"
            />
          </section>
        )
      })}
    </div>
  )
}
