import { BaseRecord } from "../lib/classes/baseRecord";
import { Cardiologist } from "../lib/classes/cardiologist";
import { Doctor } from "../lib/classes/doctor";
import { Neurologist } from "../lib/classes/neurologist";
import { Patient } from "../lib/classes/patient";
import { PaymentStatus } from "../lib/enum/paymentStatus";

//----------------------------------------------------------------------
//----------------------TEST MODIFY MEDICAL RECORD----------------------
//----------------------------------------------------------------------
// const cardiologist1 = new Cardiologist(
//   "2",
//   null,
//   17,
//   18,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null
// );
// const cardiologist2 = new Cardiologist(
//     "1",
//     null,
//     17,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null
//   );
// const neurologist1 = new Neurologist(
//   "1",
//   null,
//   17,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null
// );

// const specialties: Specialty[] = [];

// specialties.push(cardiologist1);
// specialties.push(neurologist1);

// const card1 = new Cardiologist(
//   "1",
//   null,
//   67,
//   178,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
// );
// const card2 = new Neurologist(
//   "2",
//   null,
//   70,
//   166,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null
// );

// console.log(specialties[1]);
// specialties[1].modifyMedicalRecord(card2);
// console.log("---------------------------");
// console.log("---------------------------");
// console.log(specialties[1]);

//----------------------------------------------------------------------
//----------------------TEST CREATE MEDICAL RECORD----------------------
//----------------------------------------------------------------------

const recCardiologist1 = new Cardiologist(
  "1",
  new Date(),
  65,
  178,
  "Enfermo de la barriga",
  45,
  46,
  47,
  48,
  49,
  50
);
const recNeurologistt1 = new Neurologist(
  "1",
  new Date(),
  65,
  178,
  "Enfermo de la barriga",
  45,
  46,
  47,
  "Hola",
  "Hola",
  "Hola"
);

const rootRecordPacient = new BaseRecord(
  "1",
  new Date(Date.parse("10/10/1999")),
  1,
  1,
  "",
  1,
  1,
  1,
  []
);

const paciente1 = new Patient(
  "Manuel",
  new Date(),
  "student",
  65,
  178,
  "0435345345",
  "manuel@gmail.com",
  PaymentStatus.PAYED,
  rootRecordPacient
);

const doctor = new Doctor("Alberto", [recCardiologist1]);

doctor.specialties[0].createMedicalRecord(paciente1);
console.log("CREADO");
recCardiologist1.createMedicalRecord(paciente1);
recCardiologist1.createMedicalRecord(paciente1);
recNeurologistt1.createMedicalRecord(paciente1);
//cardiologist1.createMedicalRecord(neurologist1);
console.log(paciente1.medicalRecord.registry);
