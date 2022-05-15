import { IRecordChange } from "./IRecordChange";
import { RecordBaseDecorator } from "./RecordBaseDecorator";

export abstract class RecordChangeCreatedDecorator extends RecordBaseDecorator {
  constructor(decoratedRecordChange: IRecordChange) {
    super(decoratedRecordChange);
  }

  auditMessage(): string {
    return `${this.decoratedRecordChange.auditMessage()} - ha creado un registro`;
  }
}
