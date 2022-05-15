import { Currency } from "../currency";

export abstract class SubscriptionType {
  subscriptionCost: Currency;
  period: number;

  /**
   *
   */
  constructor(subscriptionCost: Currency, period: number) {
    this.subscriptionCost = subscriptionCost;
    this.period = period;
  }
}
