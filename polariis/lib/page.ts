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

export const getPageScreenshot = async (): Promise<string> => {
  return 'Screenshot in progress...'
}
