'use server'

import { AdapterRUO } from 'pxn/adapters/AdapterRUO'
import { ServiceGetRUOMistral } from 'pxn/services/ServiceGetRUOMistral'
import { Requirement } from 'pxn/types/RequirementTypes'
import { RUO } from 'pxn/types/RUOTypes'

export const ActionGetRUO = async (requirement: Requirement): Promise<RUO> => {
  const service = new ServiceGetRUOMistral()
  return AdapterRUO(await service.getRUO(requirement))
}
