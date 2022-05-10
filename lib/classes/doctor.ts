/*
    Clase DOCTOR
*/
import { Patient } from "../classes/patient";
export class Doctor {
  private _name: string;

  constructor(name: string, patients: Patient) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set name(Name: string) {
    if (!Name) {
      throw new Error("Nombre del Doctor Invalido");
    } else {
      this._name = Name;
    }
  }
}
