import { playAudioFromBlob } from 'pxn/lib/audio'
import { CookieManager } from 'pxn/core/CookieManager'
import { Requirement } from 'pxn/types/RequirementTypes'
import { InterfaceStrategy } from 'pxn/strategies/InterfaceStrategy'
import { ActionAdjustment } from 'pxn/actions/ActionAdjustment'
import { ActionTTS } from 'pxn/actions/ActionTTS'

export class StrategyAdjustment implements InterfaceStrategy {
  async execute(requirement: Requirement): Promise<void> {
    console.log('Executing adjustment strategy')

    const cookieManager = CookieManager.getInstance()
    const currentReadingSpeed =
      cookieManager.getCookie('POLARIIS_READING_SPEED') || '1.0'
    const { feedback, readingSpeed } = JSON.parse(
      await ActionAdjustment({
        requirement,
        readingSpeed: currentReadingSpeed,
      }),
    )
    cookieManager.setCookie({
      name: 'POLARIIS_READING_SPEED',
      value: readingSpeed,
    })
    const ttsFeedback = await ActionTTS({
      stringToTurnIntoVoice: String(feedback),
      readingSpeed,
    })
    console.log('Playing audio...')
    await playAudioFromBlob(ttsFeedback)
    console.log('Audio played.')
  }
}
