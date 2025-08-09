import { ActionGetRUO } from 'pxn/actions/ActionGetRUO'
import { Audio } from './Audio'
import { ActionTranscribe } from 'pxn/actions/ActionTranscribe'
import { getPageScreenshot, getPageSourceCode } from 'pxn/lib/page'
import { ActionGetDescription } from 'pxn/actions/ActionGetDescription'

export class Polariis {
  private audio: Audio

  constructor() {
    this.audio = new Audio()
  }

  public async listen() {
    let processOk = true
    let RUO: { type: 'description' | 'interaction' | 'adjustment' } | null =
      null
    let requirementTranscription: string | null = null
    const testing = false

    while (processOk) {
      const requirementAudio = await this.audio.getAudioRequirement()

      if (!requirementAudio) {
        console.warn('No audio requirement found.')
        processOk = false
        break
      }

      if (testing) {
        requirementTranscription = 'Y a quoi sur la page ?'
        console.log({
          requirementTranscription,
        })

        RUO = {
          type: 'description',
        }
        console.log({
          RUO,
        })
      } else {
        requirementTranscription = await this._getTranscriptionRequirement(
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
      }

      const { type } = RUO

      switch (type) {
        case 'description':
          await this._getDescription(requirementTranscription)
          break
        case 'interaction':
          break
        case 'adjustment':
          break

        default:
          break
      }
      processOk = false
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
    const pageSourceCode = await getPageSourceCode()
    const pageScreenshotCanvas = await getPageScreenshot()
    const pageScreenshot = pageScreenshotCanvas.toDataURL('image/png')
    console.log('Getting page description string...')
    const description = await ActionGetDescription({
      requirement,
      screenshot: pageScreenshot,
      sourceCode: pageSourceCode,
    })
    console.log({
      description,
    })
    return description
  }
}
