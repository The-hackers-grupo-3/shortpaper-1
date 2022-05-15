import { Appointment } from "../classes/Appointments/Appointment";

export interface IAppointmentManagerDoctor {
  acceptAppointment(appointment: Appointment): void;
  cancelAppointment(appointment: Appointment): void;
  seeAppointments(): Appointment[];
  searchAppointment(appointment: Appointment): Appointment;
}
