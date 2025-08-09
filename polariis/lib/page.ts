import { domToCanvas } from 'modern-screenshot'

export const getPageSourceCode = async (): Promise<string> => {
  console.log('Getting page source code...')

  try {
    const bodyClone = document.body.cloneNode(true) as HTMLElement
    bodyClone.querySelectorAll('script, style').forEach((el) => el.remove())
    const sourceCode = bodyClone.innerHTML
    return sourceCode
  } catch (error: unknown) {
    throw new Error(
      `Failed to fetch page source code: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    )
  }
}

export const getPageScreenshot = async (): Promise<HTMLCanvasElement> => {
  console.log('Getting page screenshot...')
  const scrollToBottom = async () => {
    return new Promise<void>((resolve) => {
      const distance = 100000
      const delay = 1000

      const scrollStep = () => {
        window.scrollBy(0, distance)
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          setTimeout(() => resolve(), 50)
        } else {
          setTimeout(scrollStep, delay)
        }
      }

      scrollStep()
    })
  }
  await scrollToBottom()
  window.scrollTo(0, 0)
  return domToCanvas(document.body)
}
