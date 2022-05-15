import { IPaymentMethod } from "../../interfaces/IPaymentMethod";
import { SubscriptionType } from "./SubscriptionType";

export class Payment {
  private _paymentDate: Date;
  private _subscriptionType: SubscriptionType;
  private _paymentMethod: IPaymentMethod;

  constructor(
    suscriptionType: SubscriptionType,
    paymentMethod: IPaymentMethod
  ) {
    this._paymentDate = new Date();
    this._subscriptionType = suscriptionType;
    this._paymentMethod = paymentMethod;
  }

  public get paymentDate(): Date {
    return this._paymentDate;
  }

  public get subscriptionType(): SubscriptionType {
    return this._subscriptionType;
  }

  public get paymentMethod(): IPaymentMethod {
    return this._paymentMethod;
  }

  public payMedicalSubscription(): void {
    this._paymentMethod.payMedicalSubscription(
      this._subscriptionType,
      this._paymentDate
    );
  }
}
