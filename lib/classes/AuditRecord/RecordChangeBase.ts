import { Doctor } from "../doctor";
import { IRecordChange } from "./IRecordChange";

export class RecordChangeBase implements IRecordChange {
  private _author: Doctor;
  private _date: Date;

  constructor(author: Doctor, date: Date) {
    this._author = author;
    this._date = date;
  }
  auditMessage(): string {
    return `[${this._date}] Autor: < ${this._author.name} >`;
  }
}
