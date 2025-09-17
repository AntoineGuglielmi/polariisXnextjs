import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { ProcessEnum } from './ProcessEnum'
import { PartialProcessStateTesting } from 'pxn/types/OtherTypes'

export interface InterfaceProcessStep {
  execute(
    state: ContextProcessState & PartialProcessStateTesting,
  ): Promise<ContextProcessState>
  next(
    state: ContextProcessState & PartialProcessStateTesting,
  ): ProcessEnum | null
}
