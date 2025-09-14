import { aiConfig } from 'pxn/config/ai.config'
import { ElevenTTSAdapter } from '../TTS/ElevenTTSAdapter'
import { TTSServiceInterface } from '../interfaces/TTSServiceInterface'

export const FactoryTTSService = (): TTSServiceInterface => {
  switch (aiConfig.TTS) {
    case 'eleven':
      return new ElevenTTSAdapter()
    default:
      throw new Error(`Unknown adjustment provider: ${aiConfig.TTS}`)
  }
}
