import { Doctor } from "./doctor";
import { MedicalRecord } from "./medicalRecord";
import { Patient } from "./patient";

class Neurologist extends MedicalRecord {
  private _motor: string;
  private _reflexes: string;
  private _sensory: string;

  constructor(
    motor: string,
    reflexes: string,
    sensory: string,
    id: string,
    creationDate: Date,
    doctor: Doctor,
    patient: Patient,
    weight: number,
    height: number,
    personalHistory: string,
    heartRate: number,
    bloodPressure: number,
    saturation: number,
    registers: MedicalRecord
  ) {
    super(
      id,
      creationDate,
      doctor,
      patient,
      weight,
      height,
      personalHistory,
      heartRate,
      bloodPressure,
      saturation,
      registers
    );
    this._motor = motor;
    this._reflexes = reflexes;
    this._sensory = sensory;
  }

  createMedicalRec() {
    throw new Error("Method not implemented.");
  }
  addRecord(medicalRecord: MedicalRecord) {
    throw new Error("Method not implemented.");
  }
}
