import { PaymentMethod } from "../interfaces/paymentmethod";

import { Currency } from "../classes/currency";

class PayPal implements PaymentMethod {
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
