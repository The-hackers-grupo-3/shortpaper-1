import { IObservable } from "../MedicalRecords/IObservable";
import { IObserver } from "./IObserver";
import { IRecordChange } from "./IRecordChange";

export class AuditRecord implements IObserver {
  private _observable: IObservable;
  private _recordChanges: IRecordChange[] = [];

  constructor(observable: IObservable) {
    this._observable = observable;
  }
  update(recordChange: IRecordChange): void {
    this._recordChanges.push(recordChange);
    console.log(recordChange.auditMessage());
  }
}
