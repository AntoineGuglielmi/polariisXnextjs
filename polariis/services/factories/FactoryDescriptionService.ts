import { aiConfig } from 'pxn/config/ai.config'
import { MistralDescriptionAdapter } from '../description/MistralDescriptionAdapter'
import { DescriptionServiceInterface } from '../interfaces/DescriptionServiceInterface'

export const FactoryDescriptionService = (): DescriptionServiceInterface => {
  switch (aiConfig.RUO) {
    case 'mistral':
      return new MistralDescriptionAdapter()
    default:
      throw new Error(`Unknown transcription provider: ${aiConfig.RUO}`)
  }
}
