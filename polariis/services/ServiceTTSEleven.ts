import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'
import { elevenClient } from './clients/eleven-client'
import { AudioBlob } from 'pxn/types/AudioTypes'
import { ReadingSpeed } from 'pxn/types/OtherTypes'

export class ServiceTTSEleven {
  private client: ElevenLabsClient
  constructor() {
    this.client = elevenClient
  }

  async generateVoice({
    stringToTurnIntoVoice,
    reading_speed,
  }: {
    stringToTurnIntoVoice: string
    reading_speed: ReadingSpeed
  }): Promise<AudioBlob> {
    const audio = await this.client.textToSpeech.convert(
      'JBFqnCBsd6RMkjVDRZzb',
      {
        text: stringToTurnIntoVoice,
        modelId: 'eleven_multilingual_v2',
        outputFormat: 'mp3_44100_128',
        voiceSettings: {
          speed: Number(reading_speed),
        },
      },
    )

    const blob = await new Response(audio).blob()

    return blob
  }
}
