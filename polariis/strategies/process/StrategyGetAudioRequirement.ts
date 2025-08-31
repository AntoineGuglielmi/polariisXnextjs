import { RequirementAudio } from 'pxn/types/RequirementTypes'
import { Audio } from 'pxn/core/Audio'
import { ContextProcessState } from 'pxn/types/ProcessTypes'
import { InterfaceProcessStep } from './InterfaceProcessStep'
import { ProcessEnum } from './ProcessEnum'

export class StrategyGetAudioRequirement implements InterfaceProcessStep {
  private audio: Audio

  constructor() {
    this.audio = new Audio()
  }

  public async execute(
    state: ContextProcessState,
  ): Promise<ContextProcessState> {
    return {
      ...state,
      requirementAudio:
        (await this.audio.getAudioRequirement()) as RequirementAudio,
    }
  }

  public next(state: ContextProcessState): ProcessEnum | null {
    if (!state.requirementAudio) {
      console.warn('No audio requirement found.')
      throw new Error('Error on getting requirement audio')
    }
    return ProcessEnum.MUST_TURN_AUDIO_REQUIREMENT_INTO_STRING_REQUIREMENT
  }
}
