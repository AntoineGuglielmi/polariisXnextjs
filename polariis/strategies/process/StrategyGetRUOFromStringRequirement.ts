import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { ProcessEnum } from './ProcessEnum'
import { ActionRUO } from 'pxn/actions/ActionRUO'
import { PartialProcessStateTesting } from 'pxn/types/OtherTypes'

export class StrategyGetRUOFromStringRequirement
  implements InterfaceProcessStep
{
  public async execute(
    state: ContextProcessState & PartialProcessStateTesting,
  ): Promise<ContextProcessState> {
    return {
      ...state,
      ...(!state.testing ? { RUO: await ActionRUO(state.requirement!) } : {}),
    }
  }

  public next(
    state: ContextProcessState & PartialProcessStateTesting,
  ): ProcessEnum | null {
    if (!state.RUO && !state.testing) {
      console.warn('No RUO found.')
      throw new Error('Error on getting RUO from string requirement')
    }
    return ProcessEnum.MUST_RUN_STRATEGY_CONTEXT_WITH_RUO_AND_STRING_REQUIREMENT
  }
}
