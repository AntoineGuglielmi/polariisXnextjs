import { DescriptionObject } from 'pxn/types/DescriptionTypes'

export const AdapterDescription = (
  rawDescription: string,
): DescriptionObject => {
  return JSON.parse(rawDescription)
}
