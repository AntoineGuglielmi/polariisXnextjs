import { domToPng, domToCanvas } from 'modern-screenshot'

export const getPageSourceCode = async (): Promise<string> => {
  try {
    const response = await fetch(window.location.href)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.text()
  } catch (error: unknown) {
    throw new Error(
      `Failed to fetch page source code: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    )
  }
}

export const getPageScreenshot = async (): Promise<unknown> => {
  const scrollToBottom = async () => {
    return new Promise<void>((resolve) => {
      const distance = 100000 // Distance à parcourir à chaque step
      const delay = 1000 // Délai entre chaque step

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
  return 'Screenshot in progress...'
}
