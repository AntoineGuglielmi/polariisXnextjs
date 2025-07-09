import FooterLegals from '@/components/molecules/footer-legals/footer-legals'
import FooterNav from '@/components/molecules/footer-nav/footer-nav'
import Newsletter from '@/components/molecules/newsletter/newsletter'
import { cn } from '@/lib/utils'

type LayerFooterProps = {
  className?: string
  children?: React.ReactNode
}

export default function LayerFooter({ className }: LayerFooterProps) {
  return (
    <footer className={cn('LayerFooter py-16', className)}>
      <div className="LayerFooter__container reg-cont">
        <div className="LayerFooter__content flex flex-col gap-8">
          <div className="LayerFooter__frame text-footer-frame-text bg-footer-frame-bg p-12 rounded-big grid grid-cols-2 gap-32">
            <Newsletter />

            <FooterNav />
          </div>
          <FooterLegals />
        </div>
      </div>
    </footer>
  )
}
