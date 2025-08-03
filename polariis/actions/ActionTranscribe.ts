'use server'

import { ServiceTranscribeMistral } from 'pxn/services/ServiceTranscribeMistral'

export const ActionTranscribe = async (audioFile: File) => {
  const service = new ServiceTranscribeMistral()
  return await service.transcribe(audioFile)
}
