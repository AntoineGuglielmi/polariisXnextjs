export interface InterfaceStrategy {
  execute(requirement: string): Promise<void>
}
