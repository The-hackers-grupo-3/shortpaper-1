import { Appointment } from "../classes/Appointment";

export interface IAppointmentManager {
  requestAppointment(appointment: Appointment): Promise<Appointment>;
  createAppointment(): Appointment;
  acceptAppointment(appointment: Appointment): Appointment;
  cancelAppointment(appointment: Appointment): Appointment;
}
