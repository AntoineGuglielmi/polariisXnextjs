import Subtitle from '@/components/atoms/subtitle/subtitle'
import List from '@/components/molecules/list/list'
import { TRUSTED } from '@/data/TRUSTED'
import { cn } from '@/lib/utils'

type TrustedProps = {
  className?: string
  children?: React.ReactNode
}

export default function Trusted({ className }: TrustedProps) {
  return (
    <section className={cn('Trusted py-20', className)}>
      <div className="Trusted__container reg-cont">
        <div className="Trusted__content flex flex-col items-center gap-6">
          <Subtitle>Trusted by Leading Companies</Subtitle>
          <List
            items={TRUSTED}
            itemComponentFromKey="component"
            componentPath="atoms/trusted-logos"
            className="flex gap-12 items-center"
          />
        </div>
      </div>
    </section>
  )
}
