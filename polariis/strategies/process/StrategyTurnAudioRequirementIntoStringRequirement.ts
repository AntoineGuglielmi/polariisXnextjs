import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { ProcessEnum } from './ProcessEnum'
import { ActionTranscription } from 'pxn/actions/ActionTranscription'

export class StrategyTurnAudioRequirementIntoStringRequirement
  implements InterfaceProcessStep
{
  public async execute(
    state: ContextProcessState,
  ): Promise<ContextProcessState> {
    if (!state.requirementAudio) {
      throw new Error('No audio requirement to process')
    }

    return {
      ...state,
      requirement: await await ActionTranscription(state.requirementAudio),
    }
  }
  public next(state: ContextProcessState): ProcessEnum | null {
    if (!state.requirement) {
      console.warn('No string requirement found.')
      throw new Error(
        'Error on turning audio requirement into string requirement',
      )
    }
    return ProcessEnum.MUST_GET_RUO_FROM_STRING_REQUIREMENT
  }
}
