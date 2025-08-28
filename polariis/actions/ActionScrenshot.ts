'use server'

import puppeteer from 'puppeteer'
import { PageScreenshot } from 'pxn/types/OtherTypes'

export const ActionScrenshot = async (url: string): Promise<PageScreenshot> => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0' })
    const screenshot = await page.screenshot({ fullPage: true })
    await browser.close()
    const imageBase64 = Buffer.from(screenshot as Buffer).toString('base64')
    return `data:image/png;base64,${imageBase64}`
  } catch (err) {
    throw new Error(`Error taking screenshot: ${err}`)
  }
}
