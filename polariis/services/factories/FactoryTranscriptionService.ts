import { aiConfig } from 'pxn/config/ai.config'
import { TranscriptionServiceInterface } from '../interfaces/TranscriptionServiceInterface'
import { MistralTranscriptionAdapter } from '../transcription/MistralTranscriptionAdapter'

export const FactoryTranscriptionService =
  (): TranscriptionServiceInterface => {
    switch (aiConfig.transcription) {
      case 'mistral':
        return new MistralTranscriptionAdapter()
      default:
        throw new Error(
          `Unknown transcription provider: ${aiConfig.transcription}`,
        )
    }
  }
