export class Currency {
  value: number;
  currencyType: string;

  constructor(value: number, currencyType: string) {
    this.value = value;
    this.currencyType = currencyType;
  }
}
