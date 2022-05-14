import { ISubscriptionType } from "../interfaces/ISubcriptionType";

import { Currency } from "./currency";

export class Anual implements ISubscriptionType {
  //Atributes
  paymentModality: string;
  subscriptionCost: Currency;
  period: number;

  //Constructor
  constructor(subscriptionCost: Currency) {
    this.paymentModality = "Anual";
    this.subscriptionCost = subscriptionCost;
    this.period = 1;
  }

  //Methods
  setCost(cost: number): void {
    this.subscriptionCost.value = Number(cost) * this.period;
    this.subscriptionCost.currencyType = "$";
  }
}
