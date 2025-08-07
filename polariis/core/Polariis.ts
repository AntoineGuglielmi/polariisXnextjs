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
    let RUO: { type: 'description' | 'interaction' | 'adjustment' } | null =
      null

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

      try {
        RUO = await this._getRUO(requirementTranscription)
        console.log({
          RUO,
        })
      } catch (error: unknown) {
        console.error(
          `Error getting RUO: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`,
        )
        break
      }

      const { type } = RUO

      switch (type) {
        case 'description':
          this._getDescription(requirementTranscription)
          break
        case 'interaction':
          break
        case 'adjustment':
          break

        default:
          break
      }
    }
  }

  private async _getTranscriptionRequirement(audioFile: File): Promise<string> {
    return await ActionTranscribe(audioFile)
  }

  private async _getRUO(
    requirement: string,
  ): Promise<{ type: 'description' | 'interaction' | 'adjustment' }> {
    return JSON.parse(await ActionGetRUO(requirement))
  }

  private async _getDescription(requirement: string): Promise<string> {
    const description = `Description for: ${requirement}`
    return description
  }
}
