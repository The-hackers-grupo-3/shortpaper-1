import { IPaymentMethod } from "../interfaces/IPaymentMethod";
import { ISubscriptionType } from "../interfaces/ISubcriptionType";
import { Patient } from "./patient";

class Payment {
  patient?: Patient;
  paymentDate?: Date;
  suscriptionType?: ISubscriptionType;
  paymentMethod?: IPaymentMethod;

  constructor(
    patient: Patient,
    paymentDate: Date,
    suscriptionType: ISubscriptionType,
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
