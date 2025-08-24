import { TypeNavLink } from '@/sites/cowork/types/TypeNavLink'

export const NAV_LINKS: Array<TypeNavLink> = [
  'About',
  'Pricing',
  'Blog',
  'Events',
].map((label) => {
  return {
    label,
    href: label === 'About' ? '/cowork/about' : '/',
  } as TypeNavLink
})
