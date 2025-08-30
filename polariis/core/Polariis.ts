import { ActionGetRUO } from 'pxn/actions/ActionGetRUO'
import { Audio } from 'pxn/core/Audio'
import { ActionTranscribe } from 'pxn/actions/ActionTranscribe'
import { CookieManager } from 'pxn/core/CookieManager'
import { RUO } from 'pxn/types/RUOTypes'
import { Requirement, RequirementAudio } from 'pxn/types/RequirementTypes'
import { ContextBehaviors } from 'pxn/strategies/behaviors/ContextBehaviors'

export class Polariis {
  private audio: Audio
  private contextBehaviors: ContextBehaviors

  constructor() {
    this.audio = new Audio()
    this.contextBehaviors = new ContextBehaviors()
    this._initCookies()
  }

  public async listen() {
    // Some settings
    let processOk = true
    const testing: boolean = false

    // Start listening loop
    while (processOk) {
      // Get audio requirement
      const requirementAudio = await this.audio.getAudioRequirement()

      // If no audio requirement, stop the process
      if (!requirementAudio) {
        console.warn('No audio requirement found.')
        processOk = false
        break
      }

      // Get requirement string from audio requirement
      const requirement = testing
        ? ('Y a quoi sur la page ?' as Requirement)
        : await this._getTranscriptionRequirement(requirementAudio)

      console.log({
        requirement,
      })

      try {
        // Get RUO from requirement
        const RUO = testing
          ? ({
              type: 'description',
            } as RUO)
          : await this._getRUO(requirement)

        console.log({
          RUO,
        })

        // Run strategy context with RUO and requirement
        await this.contextBehaviors.run({
          RUO,
          requirement,
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

  private async _getTranscriptionRequirement(
    audioFile: RequirementAudio,
  ): Promise<Requirement> {
    return await ActionTranscribe(audioFile)
  }

  private async _getRUO(requirement: string): Promise<RUO> {
    return await ActionGetRUO(requirement)
  }
}
