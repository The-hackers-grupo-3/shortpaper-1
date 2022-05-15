import { IPaymentMethod } from "../../interfaces/IPaymentMethod";
import { FreeMember } from "./FreeMember";
import { Payment } from "./Payment";
import { SubscriptionType } from "./SubscriptionType";

export class PaymentManager {
  private _payments: Payment[] = [];
  private _paymentMethods: IPaymentMethod[] = [];
  private _subscriptionType: SubscriptionType;

  constructor(payments?: Payment[], paymentMethods?: IPaymentMethod[]) {
    this._payments = payments || [];
    this._paymentMethods = paymentMethods || [];
    this._subscriptionType = new FreeMember();
  }

  public get payments(): Payment[] {
    return this._payments;
  }

  public get lastPayment(): Payment {
    return this._payments[this._payments.length - 1];
  }

  public get paymentMethods(): IPaymentMethod[] {
    return this._paymentMethods;
  }

  public get subscriptionType(): SubscriptionType {
    return this._subscriptionType;
  }

  addPayment(payment: Payment): void {
    this._payments.push(payment);
  }

  addPaymentMethod(paymentMethod: IPaymentMethod): void {
    this._paymentMethods.push(paymentMethod);
  }

  payMedicalSubscription(paymentMethod: IPaymentMethod): void {
    const payment = new Payment(this._subscriptionType, paymentMethod);
    payment.payMedicalSubscription();
  }

  changeSubscriptionType(subscriptionType: SubscriptionType): void {
    this._subscriptionType = subscriptionType;
  }

  cancelMedicalSubscription(): void {
    this.changeSubscriptionType(new FreeMember());
    const lastPayment = this.lastPayment;
    console.log(
      `Se ha cancelado su suscripcion, podra seguir utilizando su servicio hasta el ${lastPayment.paymentDate.setDate(
        lastPayment.paymentDate.getDate() + lastPayment.subscriptionType.period
      )}`
    );
  }
}
