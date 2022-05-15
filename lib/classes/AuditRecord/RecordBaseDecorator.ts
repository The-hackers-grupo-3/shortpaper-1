import { IRecordChange } from "./IRecordChange";

export abstract class RecordBaseDecorator implements IRecordChange {
  protected decoratedRecordChange: IRecordChange;

  constructor(decoratedRecordChange: IRecordChange) {
    this.decoratedRecordChange = decoratedRecordChange;
  }

  auditMessage(): string {
    return this.decoratedRecordChange.auditMessage();
  }
}
