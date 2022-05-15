import { SubscriptionType } from "./SubscriptionType";

export class FreeMember extends SubscriptionType {
  constructor() {
    super(0, 1);
  }
}
