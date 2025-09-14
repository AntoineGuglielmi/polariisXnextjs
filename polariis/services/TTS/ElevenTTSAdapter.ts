import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'
import { AudioBlob } from 'pxn/types/AudioTypes'
import { TTSServiceInterface } from '../interfaces/TTSServiceInterface'
import { TTSServiceProps } from 'pxn/types/TTSTypes'
import { elevenClient } from '../clients/eleven-client'

export class ElevenTTSAdapter implements TTSServiceInterface {
  private client: ElevenLabsClient
  constructor() {
    this.client = elevenClient
  }

  async run({
    stringToTurnIntoVoice,
    readingSpeed,
  }: TTSServiceProps): Promise<AudioBlob> {
    const audio = await this.client.textToSpeech.convert(
      'JBFqnCBsd6RMkjVDRZzb',
      {
        text: stringToTurnIntoVoice,
        modelId: 'eleven_multilingual_v2',
        outputFormat: 'mp3_44100_128',
        voiceSettings: {
          speed: Number(readingSpeed),
        },
      },
    )

    const blob = await new Response(audio).blob()

    return blob
  }
}
