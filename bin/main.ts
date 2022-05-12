import { Cardiologist } from "../lib/classes/cardiologist";
import { Neurologist } from "../lib/classes/neurologist";
import { Specialty } from "../lib/interfaces/specialty";

//----------------------------------------------------------------------
//----------------------TEST MODIFY MEDICAL RECORD----------------------
//----------------------------------------------------------------------
const cardiologist1 = new Cardiologist(
  "2",
  null,
  17,
  18,
  null,
  null,
  null,
  null,
  null,
  null,
  null
);
const neurologist1 = new Neurologist(
  "1",
  null,
  17,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
);

const specialties: Specialty[] = [];

specialties.push(cardiologist1);
specialties.push(neurologist1);

const card1 = new Cardiologist(
  "1",
  null,
  67,
  178,
  null,
  null,
  null,
  null,
  null,
  null,
  null
);
const card2 = new Neurologist(
  "2",
  null,
  70,
  166,
  null,
  null,
  null,
  null,
  null,
  null,
  null
);

console.log(specialties[1]);
specialties[1].modifyMedicalRecord(card2);
console.log("---------------------------");
console.log("---------------------------");
console.log(specialties[1]);
