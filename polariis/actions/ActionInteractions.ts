'use server'

import { rawToInteractions } from 'pxn/adapters/AdapterInteractions'
import { FactoryInteractionService } from 'pxn/services/factories/FactoryInteractionService'
import {
  ActionGetInteractionsProps,
  Interactions,
} from 'pxn/types/InteractionTypes'

export const ActionInteractions = async ({
  requirement,
  screenshot,
  sourceCode,
}: ActionGetInteractionsProps): Promise<Interactions> => {
  const interactionService = FactoryInteractionService()
  const rawInteractions = await interactionService.run({
    requirement,
    screenshot,
    sourceCode,
  })
  const interactions = rawToInteractions(rawInteractions)
  return interactions
}
