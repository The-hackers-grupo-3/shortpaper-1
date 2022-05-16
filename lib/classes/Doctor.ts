/*
    Clase DOCTOR
*/

import { Specialty } from "./Specialties/Specialty";
import { Patient } from "./Patient";
import { Appointment } from "./Appointments/Appointment";
import { IAppointmentManagerDoctor } from "../interfaces/IAppointmentManagerDoctor";
import { MedicalRecord } from "./MedicalRecords/MedicalRecord";

export class Doctor {
  private _name: string;
  private _patients: Patient[] = [];
  private _specialties: Specialty[] = [];
  private _appointmentManager: IAppointmentManagerDoctor;

  constructor(
    name: string,
    appointmentManager: IAppointmentManagerDoctor,
    specialties?: Specialty[]
  ) {
    this._name = name;
    this._specialties = specialties || [];
    this._appointmentManager = appointmentManager;
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

  public get appointmentManager(): IAppointmentManagerDoctor {
    return this._appointmentManager;
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

  public seeApointments(): void {
    for (const appointment of this._appointmentManager.seeAppointments()) {
      console.log(`Cita con el paciente: ${appointment.patient.name}
                   El dia: ${appointment.appointmentDate}\n`);
    }
  }

  public acceptAppointment(appointment: Appointment): void {
    this._appointmentManager.acceptAppointment(appointment);
  }

  public cancelAppointment(appointment: Appointment): void {
    this._appointmentManager.cancelAppointment(appointment);
  }

  public completeAppoinment(
    appointment: Appointment,
    specialty: Specialty,
    medicalRecord: MedicalRecord
  ): void {
    this._appointmentManager.completeAppoinment(
      appointment,
      specialty,
      medicalRecord
    );
  }

  public findPatient(patient: Patient): Patient {
    const searchPatient = this._patients.indexOf(patient);

    if (searchPatient === -1) {
      throw new Error("El paciente no ha sido atendido por el doctor");
    }

    return this._patients[searchPatient];
  }

  public findSpecialty(specialty: Specialty): Specialty {
    const searchSpecialty = this._specialties.indexOf(specialty);

    if (searchSpecialty === -1) {
      throw new Error("El doctor no tiene la especialidad");
    }

    return this._specialties[searchSpecialty];
  }
}
