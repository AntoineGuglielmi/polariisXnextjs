'use server'

import { FactoryTTSService } from 'pxn/services/factories/FactoryTTSService'
import { ActionTTSProps } from 'pxn/types/TTSTypes'

export const ActionTTS = async ({
  stringToTurnIntoVoice,
  readingSpeed,
}: ActionTTSProps): Promise<Blob> => {
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
