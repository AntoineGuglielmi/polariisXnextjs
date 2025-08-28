// src/strategies/StrategyContext.ts

import { InterfaceStrategy } from './InterfaceStrategy'
import { StrategyAdjustment } from './StrategyAdjustment'
import { StrategyDescription } from './StrategyDescription'
import { StrategyInteraction } from './StrategyInteraction'

type RUOType = 'description' | 'interaction' | 'adjustment'

export class StrategyContext {
  private strategies: Record<RUOType, InterfaceStrategy>

  constructor() {
    this.strategies = {
      description: new StrategyDescription(),
      interaction: new StrategyInteraction(),
      adjustment: new StrategyAdjustment(),
    }
  }

  public async run({
    RUO,
    requirement,
  }: {
    RUO: { type: RUOType }
    requirement: string
  }): Promise<void> {
    const { type } = RUO
    const strategy = this.strategies[type]
    if (!strategy) {
      throw new Error(`No strategy found for type: ${type}`)
    }
    await strategy.execute(requirement)
  }
}
