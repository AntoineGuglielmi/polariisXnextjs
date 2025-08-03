export interface InterfaceServiceTranscribe {
  transcribe(audioFile: File): Promise<string>
}
