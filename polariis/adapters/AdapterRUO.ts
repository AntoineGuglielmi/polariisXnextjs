import { RUO } from 'pxn/types/RUOTypes'

export const AdapterRUO = (rawRUO: string): RUO => {
  return JSON.parse(rawRUO) as RUO
}
