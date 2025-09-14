'use server'

import { AdapterRUO } from 'pxn/adapters/AdapterRUO'
import { FactoryRUOService } from 'pxn/services/factories/FactoryRUOService'
import { Requirement } from 'pxn/types/RequirementTypes'
import { RUO } from 'pxn/types/RUOTypes'

export const ActionGetRUO = async (requirement: Requirement): Promise<RUO> => {
  const service = FactoryRUOService()
  return AdapterRUO(await service.run(requirement))
}
