import { Interactions, RawInteraction } from 'pxn/types/InteractionTypes'

export const rawToInteractions = (
  rawInteractions: RawInteraction,
): Interactions => {
  const rawInteractionsExtract = rawInteractions.match(/\[.*\]/) ?? '[]'
  return JSON.parse(rawInteractionsExtract[0])
}
