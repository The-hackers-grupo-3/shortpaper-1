import { MedicalAppointmentState } from "../../enum/medicalAppointmentState";
import { Doctor } from "../doctor";
import { Patient } from "../patient";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Appointment {
  private _appointmentDate: Date;
  private _status: MedicalAppointmentState;
  private _doctor: Doctor;
  private _patient: Patient;

  constructor(
    appointmentDate: Date,
    status: MedicalAppointmentState,
    doctor: Doctor,
    patient: Patient
  ) {
    this._appointmentDate = appointmentDate;
    this._status = status;
    this._doctor = doctor;
    this._patient = patient;
  }

  public get appointmentDate(): Date {
    return this._appointmentDate;
  }

  public set appointmentDate(date: Date) {
    this._appointmentDate = date;
  }

  public get status(): MedicalAppointmentState {
    return this._status;
  }

  public set status(status: MedicalAppointmentState) {
    if (!status) {
      throw new Error("Status invalido");
    } else {
      this._status = status;
    }
  }

  public get doctor(): Doctor {
    return this._doctor;
  }

  public get patient(): Patient {
    return this._patient;
  }
}
