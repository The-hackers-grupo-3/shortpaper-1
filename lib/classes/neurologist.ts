import { Specialty } from "../interfaces/specialty";
import { Doctor } from "./doctor";
import { MedicalRecord } from "./medicalRecord";
import { Patient } from "./patient";

export class Neurologist extends MedicalRecord implements Specialty {
  private _motor: string | null;
  private _reflexes: string | null;
  private _sensory: string | null;

  constructor(
    id: string,
    creationDate: Date | null,
    weight: number | null,
    height: number | null,
    personalHistory: string | null,
    heartRate: number | null,
    bloodPressure: number | null,
    saturation: number | null,
    motor: string | null,
    reflexes: string | null,
    sensory: string | null,
    registers: MedicalRecord[] = []
  ) {
    super(
      id,
      creationDate || new Date(),
      weight || null,
      height || null,
      personalHistory || null,
      heartRate || null,
      bloodPressure || null,
      saturation || null,
      registers
    );
    this._motor = motor || null;
    this._reflexes = reflexes || null;
    this._sensory = sensory || null;
  }

  //------------------------------
  //------GETTERS & SETTERS-------
  //------------------------------

  public get Motor() {
    return this._motor;
  }

  public set Motor(Motor: string | null) {
    if (Motor == null) {
      return;
    }
    this._motor = Motor;
  }

  //--------------------------------------------------

  public get Reflexes() {
    return this._reflexes;
  }

  public set Reflexes(Reflexes: string | null) {
    if (Reflexes == null) {
      return;
    }
    this._reflexes = Reflexes;
  }

  //--------------------------------------------------

  public get Sensory() {
    return this._sensory;
  }

  public set Sensory(Sensory: string | null) {
    if (Sensory == null) {
      return;
    }
    this._sensory = Sensory;
  }

  createMedicalRecord(patient: Patient) {
    patient.medicalRecord.addMedicalRecord(this);
  }

  modifyMedicalRecord(neurologist: Neurologist): void {
    this.Id = neurologist.Id;
    this.CreationDate = neurologist.CreationDate;
    this.Weight = neurologist.Weight;
    this.Height = neurologist.Height;
    this.PersonalHistory = neurologist.PersonalHistory;
    this.HeartRate = neurologist.HeartRate;
    this.BloodPressure = neurologist.BloodPressure;
    this.Saturation = neurologist.Saturation;
    this.Motor = neurologist.Motor;
    this.Reflexes = neurologist.Reflexes;
    this.Sensory = neurologist.Sensory;
  }
}
