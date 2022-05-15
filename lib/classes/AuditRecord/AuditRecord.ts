import { IObserver } from "./IObserver";
import { IRecordChange } from "./IRecordChange";

export class AuditRecord implements IObserver {
  private _recordChanges: IRecordChange[] = [];

  update(recordChange: IRecordChange): void {
    this._recordChanges.push(recordChange);
    console.log(recordChange.auditMessage());
  }
}
