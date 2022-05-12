import { Currency } from "../classes/currency";

export interface PaymentMethod {
  //Atributes
  payment: string;
  subscriptionCost: Currency;
  name: string;

  //Methods
  PayMedicalSubscription(): void;
}
