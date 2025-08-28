import { ActionGetRUO } from 'pxn/actions/ActionGetRUO'
import { Audio } from 'pxn/core/Audio'
import { ActionTranscribe } from 'pxn/actions/ActionTranscribe'
import { CookieManager } from 'pxn/core/CookieManager'
import { StrategyContext } from 'pxn/strategies/StrategyContext'

export class Polariis {
  private audio: Audio
  private context: StrategyContext

  constructor() {
    this.audio = new Audio()
    this.context = new StrategyContext()
    this._initCookies()
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

      await this.context.run({
        RUO: RUO!,
        requirement: requirementTranscription!,
      })
    }
  }

  private _initCookies() {
    try {
      const cookieManager = CookieManager.getInstance()
      if (!cookieManager.hasCookie('POLARIIS_READING_SPEED')) {
        cookieManager.setCookie({
          name: 'POLARIIS_READING_SPEED',
          value: '1.0',
        })
      }
    } catch (error: unknown) {
      console.warn(
        `Skipping cookie initialization because server side: ${
          error instanceof Error ? error.message : String(error)
        }`,
      )
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
}
