import { IPaymentMethod } from "../../interfaces/IPaymentMethod";
import { SubscriptionType } from "./SubscriptionType";

export class TDC implements IPaymentMethod {
  //Atributes
  private _cardNumber: string;
  private _cardName: string;
  private _billingAddres: string;

  //Constructor
  constructor(cardNumber: string, cardName: string, billingAddres: string) {
    this._cardNumber = cardName;
    this._cardName = cardName;
    this._billingAddres = billingAddres;
  }

  //Methods
  payMedicalSubscription(
    subscriptionType: SubscriptionType,
    paymentDate: Date
  ): void {
    console.log(`Tarjeta: **** **** **** ${this._cardName.slice(-4)}
                 ........contactando al banco.........`);
    console.log(`Pago exitoso!
                 Monto: ${subscriptionType.subscriptionCost}
                 Su proxima fecha de pago es el ${paymentDate.setDate(
                   paymentDate.getDate() + subscriptionType.period
                 )}`);
  }
}
