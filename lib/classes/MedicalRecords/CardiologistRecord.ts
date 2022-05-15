import { MedicalRecord } from "./MedicalRecord";
import { Patient } from "../Patient";

export class CardiologistRecord extends MedicalRecord {
  private _QRSduration: number | null;
  private _QTc: number | null;
  private _Pwave: number | null;

  constructor(
    id: string,
    creationDate: Date | null,
    weight: number | null,
    height: number | null,
    personalHistory: string | null,
    heartRate: number | null,
    bloodPressure: number | null,
    saturation: number | null,
    QRSduration: number | null,
    QTc: number | null,
    Pwave: number | null,
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
    this._QRSduration = QRSduration || null;
    this._QTc = QTc || null;
    this._Pwave = Pwave || null;
  }

  //------------------------------
  //------GETTERS & SETTERS-------
  //------------------------------

  public get QRSduration() {
    return this._QRSduration;
  }

  public set QRSduration(QRSduration: number | null) {
    if (QRSduration == null) {
      return;
    }
    this._QRSduration = QRSduration;
  }

  //--------------------------------------------------

  public get Pwave() {
    return this._Pwave;
  }

  public set Pwave(Pwave: number | null) {
    if (Pwave == null) {
      return;
    }
    this._Pwave = Pwave;
  }

  //--------------------------------------------------

  public get QTc() {
    return this._QTc;
  }

  public set QTc(QTc: number | null) {
    if (QTc == null) {
      return;
    }
    this._QTc = QTc;
  }

  //METHODS

  public create(patient: Patient) {
    const todayDate = new Date();
    const recordChange = new RecordChangeBase(todayDate, this);
    patient.medicalRecord.addMedicalRecord(this);
    this.notify(recordChange);
  }

  public modify(cardiologist: CardiologistRecord): void {
    const todayDate = new Date();
    const recordChange = new RecordChangeBase(todayDate, cardiologist, this);

    try {
      this.QRSduration = cardiologist.QRSduration;
      this.QTc = cardiologist.QTc;
      this.Pwave = cardiologist.Pwave;
      this.Id = cardiologist.Id;
      this.CreationDate = cardiologist.CreationDate;
      this.Weight = cardiologist.Weight;
      this.Height = cardiologist.Height;
      this.PersonalHistory = cardiologist.PersonalHistory;
      this.HeartRate = cardiologist.HeartRate;
      this.BloodPressure = cardiologist.BloodPressure;
      this.Saturation = cardiologist.Saturation;
      this.notify(recordChange);
    } catch (error) {
      console.error(error);
    }
  }
}
