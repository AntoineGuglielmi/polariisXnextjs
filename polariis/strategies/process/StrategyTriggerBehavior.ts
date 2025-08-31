import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { ContextBehaviors } from '../behaviors/ContextBehaviors'
import { ProcessEnum } from './ProcessEnum'

export class StrategyTriggerBehavior implements InterfaceProcessStep {
  public async execute(
    state: ContextProcessState,
  ): Promise<ContextProcessState> {
    if (!state.RUO) {
      throw new Error('No RUO to process')
    }
    if (!state.requirement) {
      throw new Error('No string requirement to process')
    }

    const contextBehaviors = new ContextBehaviors()
    await contextBehaviors.run({
      RUO: state.RUO,
      requirement: state.requirement,
    })

    return state
  }

  public next(): ProcessEnum | null {
    return ProcessEnum.MUST_GET_AUDIO_REQUIREMENT
  }
}
