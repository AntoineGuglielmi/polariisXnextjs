import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { ContextBehaviors } from '../behaviors/ContextBehaviors'
import { ProcessEnum } from './ProcessEnum'
import { PartialProcessStateTesting } from 'pxn/types/OtherTypes'

export class StrategyTriggerBehavior implements InterfaceProcessStep {
  public async execute(
    state: ContextProcessState & PartialProcessStateTesting,
  ): Promise<ContextProcessState> {
    const contextBehaviors = new ContextBehaviors()
    await contextBehaviors.run({
      RUO: state.RUO!,
      requirement: state.requirement!,
    })
    if (state.testing) {
      throw new Error(`End of cycle because you are in test mode. All is fine.`)
    }
    return state
  }

  public next(): ProcessEnum | null {
    return ProcessEnum.MUST_GET_AUDIO_REQUIREMENT
  }
}
