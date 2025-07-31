export interface InterfaceService {
  transcribe(audioFile: File): Promise<string>
}
