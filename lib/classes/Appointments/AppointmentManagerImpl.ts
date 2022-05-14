import { MedicalAppointmentState } from "../../enum/MedicalAppointmentState";
import { IAppointmentManager } from "../../interfaces/IAppointmentManager";
import { Doctor } from "../Doctor";
import { Patient } from "../Patient";
import { Appointment } from "./Appointment";

/* eslint-disable @typescript-eslint/no-unused-vars */
export class AppointmentManagerImpl implements IAppointmentManager {
  private _appointments: Appointment[] = [];

  constructor(appointments?: Appointment[]) {
    this._appointments = appointments || [];
  }

  public get appointments(): Appointment[] {
    return this._appointments;
  }

  requestAppointment(doctor: Doctor, patient: Patient, date: Date): void {
    this._appointments.push(
      new Appointment(date, MedicalAppointmentState.PENDING, doctor, patient)
    );
    console.log(
      `El paciente ${patient.name} ha solicitado una cita al Doctor ${doctor.name} para el dia ${date}.`
    );
  }

  acceptAppointment(appointment: Appointment): void {
    appointment.status = MedicalAppointmentState.SHCEDULED;
    console.log(
      `El Doctor ${appointment.doctor.name} acepto la cita solicitada por el paciente ${appointment.patient.name} para el dia ${appointment.appointmentDate}.`
    );
  }

  cancelAppointment(appointment: Appointment): void {
    appointment.status = MedicalAppointmentState.CANCELED;
    console.log(
      `El Doctor ${appointment.doctor.name} cancelo la cita solicitada por el paciente ${appointment.patient.name} para el dia ${appointment.appointmentDate}.`
    );
  }

  public searchAppointment(appointment: Appointment): Appointment {
    for (let i = 0; i <= this._appointments.length; i++) {
      //recorre todo el array de appointments
      if (this._appointments[i] == appointment) {
        return this._appointments[i];
      }
    }
    return this._appointments[0]; //Esto solo esta para que no chille, nunca deberia retornar esto porque siempre va a recibir una appointment que si esta
  }
}
