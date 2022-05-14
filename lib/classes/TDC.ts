import { IPaymentMethod } from "../interfaces/IPaymentMethod";

import { Currency } from "./currency";

class TDC implements IPaymentMethod {
  //Atributes
  payment: string;
  subscriptionCost: Currency;
  name: string;

  //Constructor
  constructor(payment: string, subscriptionCost: Currency) {
    this.payment = payment;
    this.subscriptionCost = subscriptionCost;
    this.name = "TDC";
  }

  //Methods
  PayMedicalSubscription(): void {
    console.log(
      "Se Pagaron: " +
        this.subscriptionCost.value +
        this.subscriptionCost.currencyType +
        " en " +
        this.name
    );
  }
}
