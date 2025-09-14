import { aiConfig } from 'pxn/config/ai.config'
import { RUOServiceInterface } from '../interfaces/RUOServiceInterface'
import { MistralRUOAdapter } from '../RUO/MistralRUOAdapter'

export const FactoryRUOService = (): RUOServiceInterface => {
  switch (aiConfig.RUO) {
    case 'mistral':
      return new MistralRUOAdapter()
    default:
      throw new Error(`Unknown transcription provider: ${aiConfig.RUO}`)
  }
}
