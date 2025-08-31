import { InterfaceStrategy } from 'pxn/strategies/InterfaceStrategy'

export class StrategyInteraction implements InterfaceStrategy {
  async execute(requirement: string): Promise<void> {
    console.log('Executing interaction strategy: ', requirement)
  }
}
