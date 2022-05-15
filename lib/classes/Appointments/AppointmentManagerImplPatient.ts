import { MedicalAppointmentState } from "../../enum/MedicalAppointmentState";
import { IAppointmentManagerPatient } from "../../interfaces/IAppointmentManagerPatient";
import { Doctor } from "../Doctor";
import { Patient } from "../Patient";
import { Appointment } from "./Appointment";

/* eslint-disable @typescript-eslint/no-unused-vars */
export class AppointmentManagerImplPatient
  implements IAppointmentManagerPatient
{
  private _appointments: Appointment[] = [];

  constructor(appointments?: Appointment[]) {
    this._appointments = appointments || [];
  }

  requestAppointment(doctor: Doctor, patient: Patient, date: Date): void {
    this._appointments.push(
      new Appointment(date, MedicalAppointmentState.PENDING, doctor, patient)
    );
    console.log(
      `El paciente ${patient.name} ha solicitado una cita al Doctor ${doctor.name} para el dia ${date}.`
    );
  }
}
