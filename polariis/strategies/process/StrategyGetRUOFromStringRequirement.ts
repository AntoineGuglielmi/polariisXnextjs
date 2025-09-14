import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { ProcessEnum } from './ProcessEnum'
import { ActionRUO } from 'pxn/actions/ActionRUO'

export class StrategyGetRUOFromStringRequirement
  implements InterfaceProcessStep
{
  public async execute(
    state: ContextProcessState,
  ): Promise<ContextProcessState> {
    if (!state.requirement) {
      throw new Error('No string requirement to process')
    }

    return {
      ...state,
      RUO: await ActionRUO(state.requirement),
    }
  }

  public next(state: ContextProcessState): ProcessEnum | null {
    if (!state.RUO) {
      console.warn('No RUO found.')
      throw new Error('Error on getting RUO from string requirement')
    }
    return ProcessEnum.MUST_RUN_STRATEGY_CONTEXT_WITH_RUO_AND_STRING_REQUIREMENT
  }
}
