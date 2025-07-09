import Button from '@/components/atoms/button/button'
import Logo from '@/components/atoms/logo/logo'
import { cn } from '@/lib/utils'

type NewsletterProps = {
  className?: string
  children?: React.ReactNode
}

export default function Newsletter({ className }: NewsletterProps) {
  return (
    <div
      className={cn('Newsletter flex flex-col gap-6 items-start', className)}
    >
      <Logo className="h-[1.5em] mb-8" />
      <p>Join our newsletter to stay up to date on features and releases.</p>
      <form className="flex gap-6 w-full">
        <input
          className="block w-full border-b border-b-pure-white p-3"
          placeholder="Enter your email"
        />
        <Button
          label="Subscribe"
          variant="full-negative"
          href="/"
        />
      </form>
      <p>
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our company.
      </p>
    </div>
  )
}
