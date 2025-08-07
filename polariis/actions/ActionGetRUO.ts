'use server'

import { ServiceGetRUOMistral } from 'pxn/services/ServiceGetRUOMistral'

export const ActionGetRUO = async (requirement: string): Promise<string> => {
  const service = new ServiceGetRUOMistral()
  return await service.getRUO(requirement)
}
