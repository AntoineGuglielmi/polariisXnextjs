import { aiConfig } from 'pxn/config/ai.config'
import { AdjustmentServiceInterface } from '../interfaces/AdjustmentServiceInterface'
import { MistralAdjustmentAdapter } from '../adjustment/MistralAdjustmentAdapter'

export const FactoryAdjustmentService = (): AdjustmentServiceInterface => {
  switch (aiConfig.adjustment) {
    case 'mistral':
      return new MistralAdjustmentAdapter()
    default:
      throw new Error(`Unknown adjustment provider: ${aiConfig.adjustment}`)
  }
}
