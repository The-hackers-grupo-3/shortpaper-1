import { IPaymentMethod } from "../interfaces/IPaymentMethod";
import { SubscriptionType } from "./AbstractClasses/SubscriptionType";
import { Patient } from "./patient";

export class Payment {
  patient?: Patient;
  paymentDate?: Date;
  suscriptionType?: SubscriptionType;
  paymentMethod?: IPaymentMethod;

  constructor(
    patient: Patient,
    paymentDate: Date,
    suscriptionType: SubscriptionType,
    paymentMethod: IPaymentMethod
  ) {
    this.patient = patient;
    this.paymentDate = paymentDate;
    this.suscriptionType = suscriptionType;
    this.paymentMethod = paymentMethod;
  }

  calculateDebt(): number {
    throw new Error("No implementado");
  }

  updateDebt(): void {
    throw new Error("No implementado");
  }
}
