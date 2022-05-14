import { Appointment } from "../classes/appointment";

export interface IAppointmentManager {
  requestAppointment(appointment: Appointment): Promise<Appointment>;
  createAppointment(): Appointment;
  acceptAppointment(appointment: Appointment): Appointment;
  cancelAppointment(appointment: Appointment): Appointment;
}
