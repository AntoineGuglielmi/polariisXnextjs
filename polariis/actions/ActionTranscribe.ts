'use server'

import { ServiceTranscribeMistral } from 'pxn/services/ServiceMistral'

export const ActionTranscribe = async (audioFile: File) => {
  const service = new ServiceTranscribeMistral()
  return await service.transcribe(audioFile)
}
