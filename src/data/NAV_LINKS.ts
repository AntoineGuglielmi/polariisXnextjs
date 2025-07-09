import { TypeNavLink } from '@/types/TypeNavLink'

export const NAV_LINKS: Array<TypeNavLink> = [
  'About',
  'Pricing',
  'Blog',
  'Events',
].map((label) => {
  return {
    label,
    href: '/',
  } as TypeNavLink
})
