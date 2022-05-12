/*
    Clase DOCTOR
*/
import { Patient } from "../classes/patient";
import { AppointmentManager } from "../interfaces/appointmentManager";
import { Specialty } from "../interfaces/specialty";
import { AppointmentManagerImpl } from "./appointmentManagerImpl";
export class Doctor {
  private _name: string;
  private _patients: Patient[] = [];
  private _specialties: Specialty[] = [];
  private _appointmentManager: AppointmentManager;

  constructor(name: string, specialties?: Specialty[]) {
    this._name = name;
    this._specialties = specialties || [];
    this._appointmentManager = new AppointmentManagerImpl();
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
