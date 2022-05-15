import { Currency } from "../classes/currency";

export interface IPaymentMethod {
  //Atributes
  payment: string;
  subscriptionCost: Currency;
  name: string;

  //Methods
  PayMedicalSubscription(): void;
}
