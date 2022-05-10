import { Observable } from "../interfaces/observable";
import { Observer } from "../interfaces/observer";

export class AuditReport implements Observer {
  private observable;

  constructor(observable: Observable) {
    this.observable = observable;
  }

  update() {
    console.log("Se ha modificado el historial médico");
  }
}
