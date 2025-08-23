import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'
import { elevenClient } from './clients/eleven-client'

export class ServiceTTSEleven {
  private client: ElevenLabsClient
  constructor() {
    this.client = elevenClient
  }

  async speak(stringToSay: string): Promise<Blob> {
    const audio = await this.client.textToSpeech.convert(
      'JBFqnCBsd6RMkjVDRZzb',
      {
        text: stringToSay,
        modelId: 'eleven_multilingual_v2',
        outputFormat: 'mp3_44100_128',
        voiceSettings: {
          speed: 1,
        },
      },
    )

    // Ici on force à lire tout le contenu côté serveur
    const blob = await new Response(audio).blob()

    return blob
  }
}
