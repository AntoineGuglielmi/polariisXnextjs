import { TypeAuthLink } from '@/types/TypeAuthLink'

export const AUTH_LINKS: Array<TypeAuthLink> = [
  { label: 'Log in', variant: 'hollow' },
  { label: 'Sign up', variant: 'full' },
].map(({ label, variant }) => {
  return {
    label,
    href: '/',
    variant,
  } as TypeAuthLink
})
