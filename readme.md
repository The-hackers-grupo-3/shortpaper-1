# Primer Short-paper

![build](https://img.shields.io/github/workflow/status/ArtuKILL/shortpaper-1/Node.js%20CI)

## Miembros 🦸‍♂️

- Arturo Lecuona [@ArtuKILL](https://github.com/ArtuKILL)

- Rabindra Harichand [@RabindraHarichand](https://github.com/RabindraHarichand)

- Manuel De Olival [@madomss](https://github.com/madomss)

- Jesús Soarez [@???](https://github.com/)

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
