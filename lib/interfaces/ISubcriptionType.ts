import { Currency } from "../classes/currency";

export interface ISubscriptionType {
  //Atributes
  paymentModality: string;
  subscriptionCost: Currency;
  period: number;

  //Methods
}
