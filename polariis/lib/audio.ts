export const playAudioFromBlob = async (blob: Blob): Promise<void> => {
  return new Promise((resolve, reject) => {
    const audioURL = URL.createObjectURL(blob)
    const audio = new Audio(audioURL)

    audio.onended = () => {
      URL.revokeObjectURL(audioURL)
      resolve()
    }

    audio.onerror = () => {
      reject(new Error('Error playing audio.'))
    }

    audio.play().catch(reject)
  })
}

export const downloadAudioFromBlob = (blob: Blob, baseName = 'audio') => {
  const mimeType = blob.type
  const extension = mimeType.split('/')[1] || 'webm'

  const filename = `${baseName}.${extension}`

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const base64 = reader.result
      if (typeof base64 === 'string') {
        // Supprime le préfixe "data:audio/webm;base64," si besoin
        // const cleaned = base64.split(',')[1]
        resolve(base64)
      } else {
        reject(new Error('Conversion failed'))
      }
    }

    reader.onerror = () => reject(new Error('FileReader error'))

    reader.readAsDataURL(blob)
  })
}

export const smartRecord = async (): Promise<Blob> => {
  console.log('Starting smart recording...')

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  const mediaRecorder = new MediaRecorder(stream)
  const chunks: Blob[] = []

  const audioContext = new AudioContext()
  const source = audioContext.createMediaStreamSource(stream)
  const analyser = audioContext.createAnalyser()
  analyser.fftSize = 2048
  const dataArray = new Uint8Array(analyser.fftSize)
  source.connect(analyser)

  let silenceStart: number | null = null
  const silenceDelay = 3000

  const checkSilence = (stopCallback: () => void) => {
    analyser.getByteTimeDomainData(dataArray)
    let sum = 0
    for (let i = 0; i < dataArray.length; i++) {
      const val = (dataArray[i] - 128) / 128
      sum += val * val
    }
    const volume = Math.sqrt(sum / dataArray.length)
    const now = Date.now()

    if (volume < 0.01) {
      if (silenceStart === null) silenceStart = now
      else if (now - silenceStart > silenceDelay) return stopCallback()
    } else {
      silenceStart = null
    }

    requestAnimationFrame(() => checkSilence(stopCallback))
  }

  return new Promise((resolve) => {
    mediaRecorder.ondataavailable = (e) => chunks.push(e.data)

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' })
      resolve(blob)
      stream.getTracks().forEach((t) => t.stop())
      audioContext.close()
    }

    mediaRecorder.start()
    checkSilence(() => mediaRecorder.stop())
  })
}

export const audioFileFromBlob = async ({
  blob,
  fileName = 'audio.mp3',
}: {
  blob: Blob
  fileName?: string
}): Promise<File> => {
  return new File([blob], fileName, {
    type: blob.type || 'audio/webm',
    lastModified: Date.now(),
  })
}
