import { Doctor } from "../classes/Doctor";
import { Patient } from "../classes/Patient";

export interface IAppointmentManagerPatient {
  requestAppointment(doctor: Doctor, patient: Patient, date: Date): void;
}
