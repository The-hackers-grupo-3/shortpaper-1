import { SubscriptionType } from "./SubscriptionType";

export class EnterprisePackage extends SubscriptionType {
  private _code: string;

  constructor(subscriptionCost: number, period: number, code: string) {
    super(subscriptionCost, period);
    this._code = code;
  }
}
