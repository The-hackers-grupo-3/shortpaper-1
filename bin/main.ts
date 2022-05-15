import { Doctor } from "../lib/classes/doctor";
import { BaseRecord } from "../lib/classes/MedicalRecords/BaseRecord";
import { NeurologistRecord } from "../lib/classes/MedicalRecords/NeurologistRecord";
import { Patient } from "../lib/classes/patient";
import { Neurologist } from "../lib/classes/Specialties/Neurologist";
import { PaymentStatus } from "../lib/enum/paymentStatus";
import { Payment } from "../lib/classes/Payment";
import { ISubscriptionType } from "../lib/interfaces/ISubcriptionType";
import { Monthly } from "../lib/classes/monthly";
import { Currency } from "../lib/classes/currency";
import { PayPal } from "../lib/classes/Paypal";

const today = new Date();

const doctor = new Doctor("Dr. Smith");
const patientMedicalRecord = new BaseRecord("1", today, 1, 1, "", 1, 1, 1);
const patient = new Patient(
  "John Doe",
  today,
  "heladero",
  80,
  1.8,
  "233123123",
  "johnm@gmail.com",
  PaymentStatus.DEBTOR,
  patientMedicalRecord
);

doctor.addPatient(patient);
doctor.addSpecialty(new Neurologist());
const recordNeurologist = new NeurologistRecord(
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

const modifyRecord = new NeurologistRecord(
  "1",
  new Date(),
  65,
  178,
  "Enfermo de la barriga",
  45,
  46,
  47,
  "Xao",
  "Xao",
  "Xao"
);

doctor.specialties[0].createMedicalRecord(patient, recordNeurologist);

// doctor.specialties[0].modifyMedicalRecord();

console.log(patient.medicalRecord);

////////////////// Patient Pays Subscription
const patient2 = new Patient(
  "John Doe",
  today,
  "heladero",
  80,
  1.8,
  "233123123",
  "johnm@gmail.com",
  PaymentStatus.DEBTOR,
  patientMedicalRecord
);

const subtype = new Monthly(new Currency(18, "$"));

const payment = new Payment(
  patient2,
  new Date(),
  subtype,
  new PayPal("Si", subtype.Cost)
);
console.log("El paciente pagó");
console.log(payment);
