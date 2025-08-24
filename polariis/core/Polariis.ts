import { ActionGetRUO } from 'pxn/actions/ActionGetRUO'
import { Audio } from './Audio'
import { ActionTranscribe } from 'pxn/actions/ActionTranscribe'
import { getPageSourceCode } from 'pxn/lib/page'
import { ActionGetDescription } from 'pxn/actions/ActionGetDescription'
import { playAudioFromBlob } from 'pxn/lib/audio'
import { ActionScrenshot } from 'pxn/actions/ActionScrenshot'
import { CookieManager } from './CookieManager'

export class Polariis {
  private audio: Audio

  constructor() {
    this.audio = new Audio()
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

  private async _getDescription(requirement: string): Promise<void> {
    const pageSourceCode = await getPageSourceCode()
    console.log('Getting page screeshot...')
    const pageScreenshot = await ActionScrenshot(window.location.href)
    console.log('Page screeshot ok')
    console.log({
      pageScreenshot,
    })
    console.log('Getting page description string...')
    const description = await ActionGetDescription({
      requirement,
      screenshot: pageScreenshot!,
      sourceCode: pageSourceCode,
    })
    console.log('Playing audio...')
    await playAudioFromBlob(description)
    console.log('Audio played.')
  }
}
