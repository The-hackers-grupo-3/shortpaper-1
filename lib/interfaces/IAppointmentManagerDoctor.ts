import { Appointment } from "../classes/Appointments/Appointment";
import { MedicalRecord } from "../classes/MedicalRecords/MedicalRecord";
import { ISpecialty } from "../classes/Specialties/ISpecialty";

export interface IAppointmentManagerDoctor {
  acceptAppointment(appointment: Appointment): void;
  cancelAppointment(appointment: Appointment): void;
  seeAppointments(): Appointment[];
  searchAppointment(appointment: Appointment): Appointment;
  completeAppoinment(
    appointment: Appointment,
    specialty: ISpecialty,
    medicalRecord: MedicalRecord
  ): void;
}
