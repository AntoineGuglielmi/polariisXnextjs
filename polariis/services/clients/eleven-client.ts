import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'

const { ELEVENLABS_API_KEY } = process.env

export const elevenClient = new ElevenLabsClient({
  apiKey: ELEVENLABS_API_KEY,
})
