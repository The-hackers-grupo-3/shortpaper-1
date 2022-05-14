import { IObservable } from "../interfaces/IObservable";
import { IObserver } from "../interfaces/IObserver";

export class AuditReport implements IObserver {
  private observable;

  constructor(observable: IObservable) {
    this.observable = observable;
  }

  update() {
    console.log("Se ha modificado el historial médico");
  }
}
