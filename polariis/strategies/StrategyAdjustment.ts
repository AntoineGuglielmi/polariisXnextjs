import { ActionHandleAdjustment } from 'pxn/actions/ActionHandleAdjustment'
import { ActionGetVoice } from 'pxn/actions/ActionGetVoice'
import { playAudioFromBlob } from 'pxn/lib/audio'
import { InterfaceStrategy } from 'pxn/strategies/InterfaceStrategy'
import { CookieManager } from 'pxn/core/CookieManager'

export class StrategyAdjustment implements InterfaceStrategy {
  async execute(requirement: string): Promise<void> {
    console.log('Executing adjustment strategy')

    const cookieManager = CookieManager.getInstance()
    const readingSpeed =
      cookieManager.getCookie('POLARIIS_READING_SPEED') || '1.0'
    const { feedback, reading_speed } = JSON.parse(
      await ActionHandleAdjustment({
        requirementTranscription: requirement,
        readingSpeed,
      }),
    )
    cookieManager.setCookie({
      name: 'POLARIIS_READING_SPEED',
      value: reading_speed,
    })
    const ttsFeedback = await ActionGetVoice({
      text: String(feedback),
      reading_speed,
    })
    console.log('Playing audio...')
    await playAudioFromBlob(ttsFeedback)
    console.log('Audio played.')
  }
}
