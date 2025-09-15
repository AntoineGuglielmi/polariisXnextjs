import { RequirementAudio } from 'pxn/types/RequirementTypes'
import { Audio } from 'pxn/core/Audio'
import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { ProcessEnum } from './ProcessEnum'
import { PartialProcessStateTesting } from 'pxn/types/OtherTypes'

export class StrategyGetAudioRequirement implements InterfaceProcessStep {
  private audio: Audio

  constructor() {
    this.audio = new Audio()
  }

  public async execute(
    state: ContextProcessState & PartialProcessStateTesting,
  ): Promise<ContextProcessState> {
    return {
      ...state,
      ...(!state.testing
        ? {
            requirementAudio:
              (await this.audio.getAudioRequirement()) as RequirementAudio,
          }
        : {}),
    }
  }

  public next(
    state: ContextProcessState & PartialProcessStateTesting,
  ): ProcessEnum | null {
    if (!state.requirementAudio && !state.testing) {
      console.warn('No audio requirement found.')
      throw new Error('Error on getting requirement audio')
    }
    return ProcessEnum.MUST_TURN_AUDIO_REQUIREMENT_INTO_STRING_REQUIREMENT
  }
}
