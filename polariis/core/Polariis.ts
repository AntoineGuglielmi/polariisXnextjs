import { Audio } from './Audio'
import { ActionTranscribe } from 'pxn/actions/ActionTranscribe'

export class Polariis {
  private audio: Audio

  constructor() {
    this.audio = new Audio()
  }

  public async listen() {
    const requirementAudio = await this.audio.getAudioRequirement()

    if (!requirementAudio) {
      console.warn('No audio requirement found.')
      return
    }

    const requirementTranscription = await this._getTranscriptionRequirement(
      requirementAudio,
    )

    console.log({
      requirementTranscription,
    })
  }

  private async _getTranscriptionRequirement(audioFile: File): Promise<string> {
    return await ActionTranscribe(audioFile)
  }
}
