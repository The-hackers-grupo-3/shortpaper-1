import { Appointment } from "../lib/classes/Appointments/Appointment";
import { AppointmentManagerImplDoctor } from "../lib/classes/Appointments/AppointmentManagerImplDoctor";
import { AppointmentManagerImplPatient } from "../lib/classes/Appointments/AppointmentManagerImplPatient";
import { AuditRecord } from "../lib/classes/AuditRecord/AuditRecord";
import { Doctor } from "../lib/classes/Doctor";
import { BaseRecord } from "../lib/classes/MedicalRecords/BaseRecord";
import { NeurologistRecord } from "../lib/classes/MedicalRecords/NeurologistRecord";
import { Patient } from "../lib/classes/Patient";
import { Cardiologist } from "../lib/classes/Specialties/Cardiologist";
import { Neurologist } from "../lib/classes/Specialties/Neurologist";

import { MedicalAppointmentState } from "../lib/enum/MedicalAppointmentState";
import { PaymentStatus } from "../lib/enum/PaymentStatus";

const today = new Date();

//--------------------------------------TEST--------------------------------------
// Luego de cada cita el Doctor crea un Registro de Historia Médica del Paciente.
//--------------------------------------------------------------------------------

const neurologist = new Neurologist();
const cardiologist = new Cardiologist();

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
  patientMedicalRecord,
  new AppointmentManagerImplPatient()
);

const auditRecord = new AuditRecord(patientMedicalRecord);
patientMedicalRecord.attach(auditRecord);

const recordNeurologist1 = new NeurologistRecord(
  "1",
  new Date(),
  65,
  178,
  "Enfermo de la barriga",
  45,
  46,
  47,
  "Chequeo Corteza premotora o PMC",
  "Chequeo Reflejos espinales",
  "Chequeo Receptor sensorial"
);

const recordNeurologist2 = new NeurologistRecord(
  "1",
  new Date(),
  65,
  178,
  "Enfermo de la barriga",
  45,
  46,
  47,
  "Todo bien",
  "Todo bien",
  "Todo bien"
);

const doctor = new Doctor("Dr. Smith", new AppointmentManagerImplDoctor(), []);

doctor.addSpecialty(neurologist);
doctor.addPatient(patient);

const appointment = new Appointment(
  new Date(),
  MedicalAppointmentState.RESCHEDULED,
  doctor,
  patient
);

doctor.completeAppoinment(appointment, neurologist, recordNeurologist1);

// console.log("---");
// console.log("---");
// console.log("---");
// console.log("---");
// console.log(patient.medicalRecord);

//--------------------------------------TEST-----------------------------------------------
// Los Doctores solo pueden cambiar los Registro de Historia Médica que ellos hayan creado
//-----------------------------------------------------------------------------------------

// console.log("---");
// console.log("---");
// console.log("---");
// console.log("---");

const auditRecord2 = new AuditRecord(recordNeurologist1);
recordNeurologist1.attach(auditRecord2);

//OJO
doctor
  .findPatient(patient)
  .medicalRecord.findMedicalRecord(recordNeurologist1)
  .modify(recordNeurologist2);

// ver tema que se actualice desde la clase base del registro

// console.log(patient.medicalRecord);
// audit
