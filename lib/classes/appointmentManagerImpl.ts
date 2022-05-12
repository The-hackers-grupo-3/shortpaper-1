import { AppointmentManager } from "../interfaces/appointmentManager";
import { Appointment } from "./appointment";

/* eslint-disable @typescript-eslint/no-unused-vars */
class AppointmentManagerImpl implements AppointmentManager {
  requestAppointment(appointment: Appointment): Promise<Appointment> {
    throw new Error("Method not implemented.");
  }
  createAppointment(): Appointment {
    throw new Error("Method not implemented.");
  }
  acceptAppointment(appointment: Appointment): Appointment {
    throw new Error("Method not implemented.");
  }
  cancelAppointment(appointment: Appointment): Appointment {
    throw new Error("Method not implemented.");
  }
}
