import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { ProcessEnum } from './ProcessEnum'

export interface InterfaceProcessStep {
  execute(state: ContextProcessState): Promise<ContextProcessState>
  next(state: ContextProcessState): ProcessEnum | null
}
