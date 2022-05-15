import { Appointment } from "../lib/classes/Appointments/Appointment";
import { AppointmentManagerImplDoctor } from "../lib/classes/Appointments/AppointmentManagerImplDoctor";
import { AppointmentManagerImplPatient } from "../lib/classes/Appointments/AppointmentManagerImplPatient";
import { Doctor } from "../lib/classes/doctor";
import { BaseRecord } from "../lib/classes/MedicalRecords/BaseRecord";
import { NeurologistRecord } from "../lib/classes/MedicalRecords/NeurologistRecord";
import { Patient } from "../lib/classes/patient";
import { Cardiologist } from "../lib/classes/Specialties/Cardiologist";
import { Neurologist } from "../lib/classes/Specialties/Neurologist";
import { MedicalAppointmentState } from "../lib/enum/medicalAppointmentState";
import { PaymentStatus } from "../lib/enum/paymentStatus";

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

const doctor = new Doctor("Dr. Smith", new AppointmentManagerImplDoctor(), [
  neurologist,
]);

const appointment = new Appointment(
  new Date(),
  MedicalAppointmentState.RESCHEDULED,
  doctor,
  patient
);

doctor.completeAppoinment(appointment, neurologist, recordNeurologist1);

//-------------------------------------------------------------------------------------------------------

// doctor.addPatient(patient);
// doctor.addSpecialty(new Neurologist());
// const recordNeurologist = new NeurologistRecord(
//   "1",
//   new Date(),
//   65,
//   178,
//   "Enfermo de la barriga",
//   45,
//   46,
//   47,
//   "Hola",
//   "Hola",
//   "Hola"
// );

// const modifyRecord = new NeurologistRecord(
//   "1",
//   new Date(),
//   65,
//   178,
//   "Enfermo de la barriga",
//   45,
//   46,
//   47,
//   "Xao",
//   "Xao",
//   "Xao"
// );

// // doctor.specialties[0].modifyMedicalRecord();
