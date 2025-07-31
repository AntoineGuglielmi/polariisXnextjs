'use server'

import { ServiceMistral } from 'pxn/services/ServiceMistral'

export const ActionTranscribe = async (audioFile: File) => {
  const service = new ServiceMistral()
  return await service.transcribe(audioFile)
}
