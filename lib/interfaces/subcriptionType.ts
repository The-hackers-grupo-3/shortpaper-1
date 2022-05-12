import { Currency } from "../classes/currency";

export interface SubscriptionType {
  //Atributes
  paymentModality: string;
  subscriptionCost: Currency;
  period: number;

  //Methods
}
