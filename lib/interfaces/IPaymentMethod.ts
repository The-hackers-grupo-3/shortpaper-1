import { SubscriptionType } from "../classes/Payment/SubscriptionType";

export interface IPaymentMethod {
  //Methods
  payMedicalSubscription(
    subscriptionType: SubscriptionType,
    paymentDate: Date
  ): void;
}
