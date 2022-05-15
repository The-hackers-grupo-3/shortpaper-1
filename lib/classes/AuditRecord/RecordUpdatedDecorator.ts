import { IRecordChange } from "./IRecordChange";
import { RecordBaseDecorator } from "./RecordBaseDecorator";

export abstract class RecordUpdatedDecorator extends RecordBaseDecorator {
  constructor(decoratedRecordChange: IRecordChange) {
    super(decoratedRecordChange);
  }

  auditMessage(): string {
    return `${this.decoratedRecordChange.auditMessage()} - ha actualizado un registro`;
  }
}
