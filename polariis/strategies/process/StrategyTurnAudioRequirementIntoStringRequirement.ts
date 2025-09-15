import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { ProcessEnum } from './ProcessEnum'
import { ActionTranscription } from 'pxn/actions/ActionTranscription'
import { PartialProcessStateTesting } from 'pxn/types/OtherTypes'

export class StrategyTurnAudioRequirementIntoStringRequirement
  implements InterfaceProcessStep
{
  public async execute(
    state: ContextProcessState & PartialProcessStateTesting,
  ): Promise<ContextProcessState> {
    return {
      ...state,
      ...(!state.testing
        ? {
            requirement: await await ActionTranscription(
              state.requirementAudio!,
            ),
          }
        : {}),
    }
  }
  public next(
    state: ContextProcessState & PartialProcessStateTesting,
  ): ProcessEnum | null {
    if (!state.requirement && !state.testing) {
      console.warn('No string requirement found.')
      throw new Error(
        'Error on turning audio requirement into string requirement',
      )
    }
    return ProcessEnum.MUST_GET_RUO_FROM_STRING_REQUIREMENT
  }
}
