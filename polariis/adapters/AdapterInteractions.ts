import { Interactions, RawInteraction } from 'pxn/types/InteractionTypes'

export const rawToInteractions = (
  rawInteractions: RawInteraction,
): Interactions => {
  const rawInteractionsExtract =
    rawInteractions.replaceAll('\n', '').match(/\[.*\]/) ?? '[]'
  return JSON.parse(rawInteractionsExtract[0])
}
