'use server'

import { ServiceTTSEleven } from 'pxn/services/ServiceTTSEleven'

export const ActionGetVoice = async ({
  text,
  reading_speed,
}: {
  text: string
  reading_speed: string
}): Promise<Blob> => {
  console.log({
    text,
  })
  const ttsService = new ServiceTTSEleven()
  const audioVoice = await ttsService.speak({
    stringToSay: text,
    reading_speed,
  })
  return audioVoice
}
