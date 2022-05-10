import { Patient } from "../classes/patient";
import { Doctor } from "../classes/doctor";
import { Observable } from "../interfaces/observable";
import { Observer } from "../interfaces/observer";

export abstract class MedicalRecord implements Observable {
  private _id: string;
  private _creationDate: Date;
  private _doctor: Doctor;
  private _patient: Patient;
  private _weight: number;
  private _height: number;
  private _personalHistory: string;
  private _heartRate: number;
  private _bloodPressure: number;
  private _saturation: number;
  //private _registers: MedicalRecord[];
  private _auditorRec: Observer[] = [];

  constructor(
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
    this._id = id;
    this._creationDate = creationDate;
    this._doctor = doctor;
    this._patient = patient;
    this._weight = weight;
    this._height = height;
    this._personalHistory = personalHistory;
    this._heartRate = heartRate;
    this._bloodPressure = bloodPressure;
    this._saturation = saturation;
    //this._registers.push(this);
  }

  abstract createMedicalRec(): void;
  abstract addRecord(medicalRecord: MedicalRecord): void;

  //?????
  // addRecord(medicalRecord: MedicalRecord){
  //     this._registers.push(medicalRecord);
  // }

  //Métodos de la implementación del Observer
  attach(o: Observer) {
    this._auditorRec.push(o);
  }

  detach(o: Observer) {
    console.log("cualquier cosa detach");
  }

  notify() {
    for (const auditor of this._auditorRec) {
      auditor.update();
    }
  }
}
