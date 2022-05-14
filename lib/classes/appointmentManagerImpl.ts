import { IAppointmentManager } from "../interfaces/IAppointmentManager";
import { Appointment } from "./appointment";

/* eslint-disable @typescript-eslint/no-unused-vars */
export class AppointmentManagerImpl implements IAppointmentManager {
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
