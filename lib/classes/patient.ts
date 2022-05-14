/*
    Clase PACIENTE
*/
import { PaymentStatus } from "../enum/paymentStatus";
import { MedicalRecord } from "./MedicalRecords/MedicalRecord";
export class Patient {
  private _name: string;
  private _birthday: Date;
  private _profession: string;
  private _weight: number;
  private _height: number;
  private _phone: string;
  private _email: string;
  private _paymentStatus: PaymentStatus;
  private _medicalRecord: MedicalRecord;

  constructor(
    name: string,
    birthday: Date,
    profession: string,
    weight: number,
    height: number,
    phone: string,
    email: string,
    paymentStatus: PaymentStatus,
    medicalRecord: MedicalRecord
  ) {
    this._name = name;
    this._birthday = birthday;
    this._profession = profession;
    this._weight = weight;
    this._height = height;
    this._phone = phone;
    this._email = email;
    this._paymentStatus = paymentStatus;
    this._medicalRecord = medicalRecord;
  }

  public get name() {
    return this._name;
  }

  public set name(Name: string) {
    if (!Name) {
      throw new Error("Nombre del Paciente Invalido");
    } else {
      this._name = Name;
    }
  }

  public get birthday() {
    return this._birthday;
  }

  public set birthday(Birthday: Date) {
    this._birthday = Birthday;
  }

  public get profession() {
    return this._profession;
  }

  public set profession(Profession: string) {
    if (Profession.length < 3) {
      throw new Error("Profesión Invalida");
    } else {
      this._profession = Profession;
    }
  }

  public get weight() {
    return this._weight;
  }

  public set weight(Weight: number) {
    if (Weight < 0) {
      throw new Error("Peso Invalido");
    } else {
      this._weight = Weight;
    }
  }

  public get height() {
    return this._height;
  }

  public set height(Height: number) {
    if (Height < 0) {
      throw new Error("Altura Invalida");
    } else {
      this._height = Height;
    }
  }

  public get phone() {
    return this._phone;
  }

  public set phone(Phone: string) {
    if (Phone.length < 5) {
      throw new Error("Telefono Invalido");
    } else {
      this._phone = Phone;
    }
  }

  public get email() {
    return this._email;
  }

  public set email(Email: string) {
    if (Email.length < 4) {
      throw new Error("Email Invalido");
    } else {
      this._email = Email;
    }
  }

  public get paymentStatus() {
    return this._paymentStatus;
  }

  public get medicalRecord() {
    return this._medicalRecord;
  }
}
