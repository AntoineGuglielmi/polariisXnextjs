import { aiConfig } from 'pxn/config/ai.config'
import { InteractionServiceInterface } from '../interfaces/InteractionServiceInterface'
import { MistralInteractionAdapter } from '../interaction/MistralInteractionAdapter'

export const FactoryInteractionService = (): InteractionServiceInterface => {
  switch (aiConfig.interaction) {
    case 'mistral':
      return new MistralInteractionAdapter()
    default:
      throw new Error(`Unknown adjustment provider: ${aiConfig.interaction}`)
  }
}
