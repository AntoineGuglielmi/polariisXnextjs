import { Mistral } from '@mistralai/mistralai'
import { Requirement, RequirementAudio } from 'pxn/types/RequirementTypes'
import { TranscriptionServiceInterface } from '../interfaces/TranscriptionServiceInterface'
import { mistralClient } from '../clients/mistral-client'

export class MistralTranscriptionAdapter
  implements TranscriptionServiceInterface
{
  private client: Mistral

  constructor() {
    this.client = mistralClient
  }

  async run(audioFile: RequirementAudio): Promise<Requirement> {
    try {
      const { text } = await this.client.audio.transcriptions.complete({
        model: 'voxtral-mini-latest',
        file: {
          fileName: 'requirement.wav',
          content: audioFile,
        },
      })
      return text
    } catch (error: unknown) {
      throw new Error(
        `Transcription failed: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      )
    }
  }
}
