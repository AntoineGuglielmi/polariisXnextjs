import { TypeTrusted } from '@/sites/cowork/types/TypeTrusted'

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
