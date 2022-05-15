import { Doctor } from "../classes/doctor";
import { Patient } from "../classes/patient";

export interface IAppointmentManagerPatient {
  requestAppointment(doctor: Doctor, patient: Patient, date: Date): void;
}
