import { InterfaceStrategy } from './InterfaceStrategy'

export class StrategyInteraction implements InterfaceStrategy {
  async execute(requirement: string): Promise<void> {
    console.log('Executing interaction strategy')
  }
}
