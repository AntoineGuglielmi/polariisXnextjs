import { ProcessEnum } from './ProcessEnum'
import { StrategyGetAudioRequirement } from './StrategyGetAudioRequirement'
import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { StrategyTurnAudioRequirementIntoStringRequirement } from './StrategyTurnAudioRequirementIntoStringRequirement'
import { StrategyGetRUOFromStringRequirement } from './StrategyGetRUOFromStringRequirement'
import { StrategyTriggerBehavior } from './StrategyTriggerBehavior'
import { PartialProcessStateTesting } from 'pxn/types/OtherTypes'

export type ContextProcessRunProps = object

export class ContextProcess {
  private strategies: Partial<Record<ProcessEnum, InterfaceProcessStep>>
  private currentStep: ProcessEnum = ProcessEnum.MUST_GET_AUDIO_REQUIREMENT
  private processOk: boolean = true
  private state: ContextProcessState & PartialProcessStateTesting = {
    requirementAudio: null,
    requirement: null, // if testing is set to true, you can provide a value for this property
    RUO: null, // if testing is set to true, you can provide a value for this property
    testing: false,
  }

  constructor() {
    this.strategies = {
      [ProcessEnum.MUST_GET_AUDIO_REQUIREMENT]:
        new StrategyGetAudioRequirement(),
      [ProcessEnum.MUST_TURN_AUDIO_REQUIREMENT_INTO_STRING_REQUIREMENT]:
        new StrategyTurnAudioRequirementIntoStringRequirement(),
      [ProcessEnum.MUST_GET_RUO_FROM_STRING_REQUIREMENT]:
        new StrategyGetRUOFromStringRequirement(),
      [ProcessEnum.MUST_RUN_STRATEGY_CONTEXT_WITH_RUO_AND_STRING_REQUIREMENT]:
        new StrategyTriggerBehavior(),
    }
  }

  public async run(): Promise<void> {
    while (this.processOk) {
      try {
        const strategy = this.strategies[this.currentStep]

        if (!strategy) {
          console.error(`No strategy found for step: ${this.currentStep}`)
          this.processOk = false
          break
        }

        this.state = {
          ...this.state,
          ...(await strategy.execute(this.state)),
        }
        console.log({
          state: this.state,
        })
        this.currentStep =
          strategy.next(this.state) ?? ProcessEnum.MUST_GET_AUDIO_REQUIREMENT
      } catch (error: unknown) {
        this.processOk = false
        this.currentStep = ProcessEnum.MUST_GET_AUDIO_REQUIREMENT
        if (error && typeof error === 'object' && 'message' in error) {
          console.info(
            '%c' + (error as { message: string }).message,
            'color: #FFB114; font-weight: bold;',
          )
        } else {
          console.info(error)
        }
      }
    }
  }
}
