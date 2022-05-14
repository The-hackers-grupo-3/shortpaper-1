import { MedicalAppointmentState } from "../enum/MedicalAppointmentState";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Appointment {
  appointmentDate?: Date;
  status?: MedicalAppointmentState;
  doctor?: Doctor;
  patient?: Patient;

  constructor(
    appointmentDate: Date,
    status: MedicalAppointmentState,
    doctor: Doctor,
    patient: Patient
  ) {
    this.appointmentDate = appointmentDate;
    this.status = status;
    this.doctor = doctor;
    this.patient = patient;
  }
}
