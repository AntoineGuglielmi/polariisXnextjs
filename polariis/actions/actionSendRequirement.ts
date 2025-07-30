'use server'

import { ServiceSendRequirement } from 'pxn/services/ServiceSendRequirement'

export const actionSendRequirement = async (inputBase64: File) => {
  return await ServiceSendRequirement(inputBase64)
}
