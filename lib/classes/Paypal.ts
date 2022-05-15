import { IPaymentMethod } from "../interfaces/IPaymentMethod";

import { Currency } from "./Currency";

class PayPal implements IPaymentMethod {
  //Atributes
  payment: string;
  subscriptionCost: Currency;
  name: string;

  //Constructor
  constructor(payment: string, subscriptionCost: Currency) {
    this.payment = payment;
    this.subscriptionCost = subscriptionCost;
    this.name = "PayPal";
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
