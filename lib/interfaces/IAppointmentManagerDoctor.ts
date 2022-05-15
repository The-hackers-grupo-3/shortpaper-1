import { Appointment } from "../classes/Appointments/Appointment";
import { MedicalRecord } from "../classes/MedicalRecords/MedicalRecord";
import { Specialty } from "../classes/Specialties/Specialty";

export interface IAppointmentManagerDoctor {
  acceptAppointment(appointment: Appointment): void;
  cancelAppointment(appointment: Appointment): void;
  seeAppointments(): Appointment[];
  searchAppointment(appointment: Appointment): Appointment;
  completeAppoinment(
    appointment: Appointment,
    specialty: Specialty,
    medicalRecord: MedicalRecord
  ): void;
}
