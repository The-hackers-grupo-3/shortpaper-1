import { ISubscriptionType } from "../interfaces/ISubcriptionType";

import { Currency } from "./currency";

export class Monthly implements ISubscriptionType {
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

  public get Cost(): Currency {
    return new Currency(
      this.subscriptionCost.value,
      this.subscriptionCost.currencyType
    );
  }
}
