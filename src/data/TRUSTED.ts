import { TypeTrusted } from '@/types/TypeTrusted'

export const TRUSTED: Array<TypeTrusted> = [
  'Nexorix',
  'Zentora',
  'Quantivo',
  'Lumetra',
  'Velgora',
].map((name) => {
  return {
    name,
    component: name,
  }
})
