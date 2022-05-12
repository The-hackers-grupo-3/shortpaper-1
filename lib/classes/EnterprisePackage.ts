import { SubscriptionType } from "../interfaces/subcriptionType";

import { Currency } from "../classes/currency";

class EnterprisePackage implements SubscriptionType {
  //Atributes
  paymentModality: string;
  subscriptionCost: Currency;
  period: number;

  //Constructor
  constructor(subscriptionCost: Currency) {
    this.paymentModality = "Enterprise Package";
    this.subscriptionCost = subscriptionCost;
    this.period = 12;
  }

  //Methods
  setCost(cost: number): void {
    this.subscriptionCost.value = Number(cost) * this.period * 1.05;
    this.subscriptionCost.currencyType = "$";
  }
}
