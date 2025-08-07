import { ActionGetRUO } from 'pxn/actions/ActionGetRUO'
import { Audio } from './Audio'
import { ActionTranscribe } from 'pxn/actions/ActionTranscribe'

export class Polariis {
  private audio: Audio

  constructor() {
    this.audio = new Audio()
  }

  public async listen() {
    let processOk = true

    while (processOk) {
      const requirementAudio = await this.audio.getAudioRequirement()

      if (!requirementAudio) {
        console.warn('No audio requirement found.')
        processOk = false
        break
      }

      const requirementTranscription = await this._getTranscriptionRequirement(
        requirementAudio,
      )

      console.log({
        requirementTranscription,
      })

      const RUO = await this._getRUO(requirementTranscription)
      console.log({
        RUO,
      })
    }
  }

  private async _getTranscriptionRequirement(audioFile: File): Promise<string> {
    return await ActionTranscribe(audioFile)
  }

  private async _getRUO(requirement: string): Promise<string> {
    return JSON.parse(await ActionGetRUO(requirement))
  }
}
