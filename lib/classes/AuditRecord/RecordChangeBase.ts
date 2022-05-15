import { MedicalRecord } from "../MedicalRecords/MedicalRecord";
import { IRecordChange } from "./IRecordChange";

export class RecordChangeBase implements IRecordChange {
  // private _author: Doctor;
  private _date: Date;
  private _newMedicalRecord: MedicalRecord;
  private _oldMedicalRecord: MedicalRecord | undefined;

  constructor(
    date: Date,
    newMedicalRecord: MedicalRecord,
    oldMedicalRecord?: MedicalRecord
  ) {
    // this._author = author;
    this._date = date;
    this._newMedicalRecord = Object.assign({}, newMedicalRecord);
    if (oldMedicalRecord) {
      this._oldMedicalRecord = Object.assign({}, oldMedicalRecord);
    }
  }

  private findDiferences(): Map<string, string | number | Date> {
    if (!this._oldMedicalRecord) {
      return new Map<string, string>();
    }

    const diferences = new Map<string, string>();

    const oldRecordEntries = Object.entries(this._oldMedicalRecord);
    const newRecordEntries = Object.entries(this._newMedicalRecord);

    for (const [key, value] of oldRecordEntries) {
      const diference = newRecordEntries.find(
        ([k, v]) => k === key && v !== value
      );
      if (diference) {
        diferences.set(`old ${key}`, value);
        diferences.set(`new ${key}`, diference[1]);
      }
    }

    return diferences;
  }

  private diferenceToString(
    diference: Map<string, string | number | Date>
  ): string {
    let diferenceString = "[CAMBIOS]\n";
    let paridad = 1;
    for (const [key, value] of diference) {
      if (paridad % 2 === 0) {
        diferenceString += `${key}: ${value}`;
        diferenceString += "\n";
      } else {
        diferenceString += `${key}: ${value}\t➡\t`;
      }
      paridad++;
    }
    return diferenceString;
  }

  auditMessage(): string {
    const diferences = this.findDiferences();
    const diferenceString = this.diferenceToString(diferences);
    return `[${this._date}] - ${diferenceString}`;
  }
}
