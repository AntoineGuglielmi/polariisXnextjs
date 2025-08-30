import { RUO, RUOType } from 'pxn/types/RUOTypes'
import { InterfaceStrategy } from 'pxn/strategies/InterfaceStrategy'
import { StrategyAdjustment } from './StrategyAdjustment'
import { StrategyDescription } from './StrategyDescription'
import { StrategyInteraction } from './StrategyInteraction'
import { Requirement } from 'pxn/types/RequirementTypes'

export class ContextBehaviors {
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
    RUO: RUO
    requirement: Requirement
  }): Promise<void> {
    //
    const { type } = RUO
    const strategy = this.strategies[type]

    // Error if no strategy found
    if (!strategy) {
      throw new Error(`No strategy found for type: ${type}`)
    }

    // Execute strategy
    await strategy.execute(requirement)
  }
}
