import { IObserver } from "../AuditRecord/IObserver";
import { Patient } from "../patient";
import { IObservable } from "./IObservable";

export abstract class MedicalRecord implements IObservable {
  private _id: string;
  private _creationDate: Date;
  private _weight: number | null;
  private _height: number | null;
  private _personalHistory: string | null;
  private _heartRate: number | null;
  private _bloodPressure: number | null;
  private _saturation: number | null;
  private _registers: MedicalRecord[] = [];
  private _auditorRec: IObserver[] = [];

  constructor(
    id: string,
    creationDate: Date | null,
    weight: number | null,
    height: number | null,
    personalHistory: string | null,
    heartRate: number | null,
    bloodPressure: number | null,
    saturation: number | null,
    registers?: MedicalRecord[]
  ) {
    this._id = id;
    this._creationDate = creationDate || new Date();
    this._weight = weight || null;
    this._height = height || null;
    this._personalHistory = personalHistory || null;
    this._heartRate = heartRate || null;
    this._bloodPressure = bloodPressure || null;
    this._saturation = saturation || null;
    this._registers = registers || [];
  }

  //------------------------------
  //------GETTERS & SETTERS-------
  //------------------------------

  public get Id() {
    return this._id;
  }

  public set Id(Id: string | null) {
    if (Id == null) {
      return;
    }
    this._id = Id;
  }

  //--------------------------------------------------

  public get CreationDate() {
    return this._creationDate;
  }

  public set CreationDate(CreationDate: Date | null) {
    if (CreationDate == null) {
      return;
    }
    this._creationDate = CreationDate;
  }

  //--------------------------------------------------

  public get Weight() {
    return this._weight;
  }

  public set Weight(Weight: number | null) {
    if (Weight == null) {
      return;
    }
    this._weight = Weight;
  }

  //--------------------------------------------------

  public get Height() {
    return this._height;
  }

  public set Height(Height: number | null) {
    if (Height == null) {
      return;
    }
    this._height = Height;
  }

  //--------------------------------------------------

  public get PersonalHistory() {
    return this._personalHistory;
  }

  public set PersonalHistory(PersonalHistory: string | null) {
    if (PersonalHistory == null) {
      return;
    }
    this._personalHistory = PersonalHistory;
  }

  //--------------------------------------------------

  public get HeartRate() {
    return this._heartRate;
  }

  public set HeartRate(HeartRate: number | null) {
    if (HeartRate == null) {
      return;
    }
    this._heartRate = HeartRate;
  }

  //--------------------------------------------------

  public get BloodPressure() {
    return this._bloodPressure;
  }

  public set BloodPressure(BloodPressure: number | null) {
    if (BloodPressure == null) {
      return;
    }
    this._bloodPressure = BloodPressure;
  }

  //--------------------------------------------------

  public get Saturation() {
    return this._saturation;
  }

  public set Saturation(Saturation: number | null) {
    if (Saturation == null) {
      return;
    }
    this._saturation = Saturation;
  }

  //--------------------------------------------------

  public abstract create(patient: Patient): void;

  public abstract modify(medicalRecord: MedicalRecord): void;

  public get registry() {
    return this._registers;
  }

  addMedicalRecord(medicalRecord: MedicalRecord) {
    this._registers.push(medicalRecord);
  }

  public findMedicalRecord(medicalRecord: MedicalRecord): MedicalRecord {
    const searchRecord = this._registers.indexOf(medicalRecord);

    if (searchRecord === -1) {
      throw new Error("El medical record no existe");
    }

    return this._registers[searchRecord];
  }

  //Métodos de la implementación del Observer
  attach(o: IObserver) {
    this._auditorRec.push(o);
  }

  detach(o: IObserver) {
    this._auditorRec = this._auditorRec.filter((obs) => obs !== o);
  }

  notify(medicalRecord: MedicalRecord): void;

  notify(
    newMedicalRecord: MedicalRecord,
    oldMedicalRecord: MedicalRecord
  ): void;

  notify(
    newMedicalRecord: MedicalRecord,
    oldMedicalRecord?: MedicalRecord
  ): void {
    if (oldMedicalRecord) {
      this._auditorRec.forEach((obs) =>
        obs.update(newMedicalRecord, oldMedicalRecord)
      );
      return;
    }
    this._auditorRec.forEach((obs) => obs.update(newMedicalRecord));
  }
}
