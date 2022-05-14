import { Currency } from "../classes/Currency";

export interface IPaymentMethod {
  //Atributes
  payment: string;
  subscriptionCost: Currency;
  name: string;

  //Methods
  PayMedicalSubscription(): void;
}
