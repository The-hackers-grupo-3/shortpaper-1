import { Appointment } from "../classes/Appointments/Appointment";
import { Doctor } from "../classes/Doctor";
import { Patient } from "../classes/Patient";

export interface IAppointmentManager {
  requestAppointment(doctor: Doctor, patient: Patient, date: Date): void;
  acceptAppointment(appointment: Appointment): void;
  cancelAppointment(appointment: Appointment): void;
}
