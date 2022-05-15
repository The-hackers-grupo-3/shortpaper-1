import { Currency } from "../classes/Currency";

export interface ISubscriptionType {
  //Atributes
  paymentModality: string;
  subscriptionCost: Currency;
  period: number;

  //Methods
}
