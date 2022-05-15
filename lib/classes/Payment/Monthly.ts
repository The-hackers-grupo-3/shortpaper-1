import { SubscriptionType } from "./SubscriptionType";

export class Monthly extends SubscriptionType {
  //Constructor
  constructor() {
    super(20, 1);
  }
}
