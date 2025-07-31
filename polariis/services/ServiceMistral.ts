import { Mistral } from '@mistralai/mistralai'
import { InterfaceService } from 'pxn/interfaces/InterfaceService'
import { mistralClient } from './clients/mistral-client'

export class ServiceMistral implements InterfaceService {
  private client: Mistral

  constructor() {
    this.client = mistralClient
  }

  async transcribe(audioFile: File): Promise<string> {
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
