import { SubscriptionType } from "./AbstractClasses/SubscriptionType";
import { Currency } from "./currency";

export class Monthly implements SubscriptionType {
  //Atributes
  paymentModality: string;
  subscriptionCost: Currency;
  period: number;

  //Constructor
  constructor(subscriptionCost: Currency) {
    this.paymentModality = "Monthly";
    this.subscriptionCost = subscriptionCost;
    this.period = 12;
  }

  //Methods
  setCost(cost: number): void {
    this.subscriptionCost.value = Number(cost) * this.period;
    this.subscriptionCost.currencyType = "$";
  }
}
