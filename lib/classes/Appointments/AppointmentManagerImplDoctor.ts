import { MedicalAppointmentState } from "../../enum/medicalAppointmentState";
import { IAppointmentManagerDoctor } from "../../interfaces/IAppointmentManagerDoctor";
import { MedicalRecord } from "../MedicalRecords/MedicalRecord";
import { Specialty } from "../Specialties/Specialty";
import { Appointment } from "./Appointment";

/* eslint-disable @typescript-eslint/no-unused-vars */
export class AppointmentManagerImplDoctor implements IAppointmentManagerDoctor {
  private _appointments: Appointment[] = [];

  constructor(appointments?: Appointment[]) {
    this._appointments = appointments || [];
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

  public seeAppointments(): Appointment[] {
    return this._appointments;
  }

  public completeAppoinment(
    appointment: Appointment,
    specialty: Specialty,
    medicalRecord: MedicalRecord
  ): void {
    appointment.status = MedicalAppointmentState.COMPLETED;
    try {
      appointment.doctor
        .findSpecialty(specialty)
        .createMedicalRecord(appointment.patient, medicalRecord);
    } catch {
      console.log("El medicono no tiene especialidades");
    }
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
