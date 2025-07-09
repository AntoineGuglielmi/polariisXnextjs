import { TypeNavLink } from '@/types/TypeNavLink'

export const FOOTER_LINKS: Array<{
  title: string
  links: Array<TypeNavLink>
}> = [
  {
    title: 'Explore more',
    links: [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Pricing' },
      { label: 'Blog' },
      { label: 'Events' },
    ],
  },
  {
    title: 'Stay connected',
    links: [
      { label: 'Subscribe' },
      { label: 'Member Stories' },
      { label: 'Locations' },
      { label: 'Write for Us' },
    ],
  },
  {
    title: 'Follow us',
    links: [
      { label: 'Facebook' },
      { label: 'Instagram' },
      { label: 'X' },
      { label: 'LinkedIn' },
      { label: 'Youtube' },
    ],
  },
].map(({ title, links }) => {
  return {
    title,
    links: links.map(({ label }) => {
      return {
        label,
        href: '/',
      }
    }),
  } as {
    title: string
    links: Array<TypeNavLink>
  }
})
