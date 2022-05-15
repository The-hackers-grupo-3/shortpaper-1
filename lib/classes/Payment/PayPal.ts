import { IPaymentMethod } from "../../interfaces/IPaymentMethod";
import { SubscriptionType } from "./SubscriptionType";

export class PayPal implements IPaymentMethod {
  private _user: string;

  constructor(user: string) {
    this._user = user;
  }

  public set user(user: string) {
    this._user = user;
  }

  public get user(): string {
    return this._user;
  }

  payMedicalSubscription(
    subscriptionType: SubscriptionType,
    paymentDate: Date
  ): void {
    console.log(`Bienvenido a PayPal ${this._user}
                 Acepta realizar el pago de ${subscriptionType.subscriptionCost} + comision?
                                  .........cargando pago.........`);
    console.log(`Pago exitoso!
                 Su proxima fecha de pago es el ${paymentDate.setDate(
                   paymentDate.getDate() + subscriptionType.period
                 )}`);
  }
}
