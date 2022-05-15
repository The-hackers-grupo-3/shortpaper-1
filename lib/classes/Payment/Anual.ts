import { SubscriptionType } from "./SubscriptionType";

export class Anual extends SubscriptionType {
  constructor() {
    super(200, 12);
  }
}
