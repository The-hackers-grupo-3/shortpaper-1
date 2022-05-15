import { IObservable } from "../MedicalRecords/IObservable";
import { MedicalRecord } from "../MedicalRecords/MedicalRecord";
import { IObserver } from "./IObserver";
import { IRecordChange } from "./IRecordChange";

export class AuditRecord implements IObserver {
  private _observable: IObservable;
  private _recordChanges: IRecordChange[] = [];

  constructor(observable: IObservable) {
    this._observable = observable;
  }

  update(medicalRecord: MedicalRecord): void;

  update(
    newMedicalRecord: MedicalRecord,
    oldMedicalRecord: MedicalRecord
  ): void;

  update(newMedicalRecord: MedicalRecord, oldMedicalRecord?: MedicalRecord) {
    console.log("Se ha modificado el historial médico");
    this._recordChanges.push();
  }
}
