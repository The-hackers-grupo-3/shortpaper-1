import { Appointment } from "../classes/Appointments/Appointment";
import { Doctor } from "../classes/doctor";
import { Patient } from "../classes/patient";

export interface IAppointmentManager {
  requestAppointment(doctor: Doctor, patient: Patient, date: Date): void;
  acceptAppointment(appointment: Appointment): void;
  cancelAppointment(appointment: Appointment): void;
}
