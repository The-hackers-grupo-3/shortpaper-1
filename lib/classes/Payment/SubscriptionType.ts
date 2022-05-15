export abstract class SubscriptionType {
  private _subscriptionCost: number;
  private _period: number;

  constructor(subscriptionCost: number, period: number) {
    this._subscriptionCost = subscriptionCost;
    this._period = period;
  }

  public get subscriptionCost(): number {
    return this._subscriptionCost;
  }

  public set subscriptionCost(cost: number) {
    this._subscriptionCost = cost;
  }

  public get period(): number {
    return this._period;
  }

  public set period(period: number) {
    this._period = period;
  }
}
