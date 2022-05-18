# Primer Short-paper

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/The-hackers-grupo-3/shortpaper-1/Node.js%20CI)

## Miembros 🦸‍♂️

- Arturo Lecuona [@ArtuKILL](https://github.com/ArtuKILL)

- Rabindra Harichand [@RabindraHarichand](https://github.com/RabindraHarichand)

- Manuel De Olival [@madomss](https://github.com/madomss)

- Jesús Soarez [@jesussoares](https://github.com/jesussoares)

## Commits más relevantes


| Miembro            | Tarea                                                                                                                                                                                 | Commit significativo                                                                                  | Commit HASH                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Arturo Lecuona     | Historia Medica del Paciente                                                                                                                                                          | Refactorización de los medical records                                                                | `<11bc3186d82bb9c90ba8d36fa18e7d9344c0125d>` |
| Arturo Lecuona     | Auditoria de la Historia Medica                                                                                                                                                       | feat(audit record): patron decorator en RecordChanges                                                 | `<b759cd1e62fbc9b2d90e5154c4b1a27c8a842735>` |
| Rabindra Harichand | El Paciente puede disponer de varios mecanismos de pago y modalidades: Tarjeta de Crédito, PayPal, Pago mensual o anual, Beneficio por paquete de empresa (Beneficio a Empleados), etc. | PaymentMethod y sus implementaciones (No está en el nombre del commit pero también SubscriptionType ) | `<eb60c7eda9ca7aec85ddb1d953f3839265bcba52>` |
| Manuel De Olival   | Modificar la historia médica por paciente                                                                                                                                             | Implementación modificar historial médico según la especialidad                                       | `<8b7f10dc8b19ca59426bd64b295693b9a4fa27db>` |
| Manuel De Olival   | Doctor crea un Registro de Historia Médica del Paciente                                                                                                                               | Doctor segun su especialidad crea un Registro de Historia Médica del Paciente                         | `<5436bb15832f32a40cb48cb082a9a7e5c59b09db>` |
| Jesus Soares       | Clase Appointment y AppointmentManagerImpl                                                                                                                                            | Encapsulamiento de la clase Appointment e Implementacion de los metodos …                             | `<de846f987935ee909ec30a2a3a2c0f14aca7851d>` |
| Jesus Soares       | Modulo Payment: Clase Payment, PaymentManager y su uso en la clase Patient, clase abstracta SubscriptionType y las 3 implementaciones de PaymentMethod                                | Implementacion del Modulo Payment y su uso en la clase Patient                                        | `<56a4d2c4f7a38a890081778012cc02590c7b6655>` |


## Herramientas 🛠

Se utilzan distintas herramientas para facilitar el desarrollo del código del short paper.

- **Jest** - Libreria para hacer los tests.

- **Eslint** - Para asegurar la calidad funcional del código.

- **Prettier** - Para asegurar la calidad estetica del código.

- **lint-staged** - Ejecuta `prettier` y `eslint` en los archivos modificados.

- **Husky** - Ejecuta `lint-stage` y los test antes de hacer commit.

## Iniciar el proyecto

Se debe tener [NodeJS](https://nodejs.org/es/) y [Git](https://git-scm.com/downloads).

### Clonar el repo

**HTTPS:**

```bash
git clone https://github.com/ArtuKILL/shortpaper-1.git
```

**SSH:**

```bash
git clone git@github.com:ArtuKILL/shortpaper-1.git
```

### Instalar herramientas

- Una vez dentro de la carpeta ejecutar `npm install`

- Luego ejecutar `npm run start` para verificar que todo este bien.

**Output:**

```bash
$ npm run start
> shortpaper-1@1.0.0 start
> ts-node ./bin/main.ts

Ey!
```
