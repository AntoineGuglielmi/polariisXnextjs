'use server'

import { FactoryTTSService } from 'pxn/services/factories/FactoryTTSService'

export const ActionTTS = async ({
  stringToTurnIntoVoice,
  readingSpeed,
}: {
  stringToTurnIntoVoice: string
  readingSpeed: string
}): Promise<Blob> => {
  console.log({
    stringToTurnIntoVoice,
  })
  const ttsService = FactoryTTSService()
  const audioVoice = await ttsService.run({
    stringToTurnIntoVoice,
    readingSpeed,
  })
  return audioVoice
}
