/*
    Clase DOCTOR
*/
import { Patient } from "./patient";
import { IAppointmentManager } from "../interfaces/IAppointmentManager";
import { AppointmentManagerImpl } from "./appointmentManagerImpl";
import { Specialty } from "./Specialties/Specialty";
export class Doctor {
  private _name: string;
  private _patients: Patient[] = [];
  private _specialties: Specialty[] = [];
  private _appointmentManager: IAppointmentManager;

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

  public get specialties() {
    return this._specialties;
  }

  public addSpecialty(specialty: Specialty) {
    this._specialties.push(specialty);
  }

  //TODO: Temporal
  public get patients() {
    return this._patients;
  }

  public addPatient(patient: Patient) {
    this._patients.push(patient);
  }
}
