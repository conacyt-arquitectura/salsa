---
tags:
  - roles
  - actividades
---


# Roles y actividades

El flujo de trabajo consta de la definición de los siguientes elementos:

1. Roles
2. Actividades

## Roles

El modelo de desarrollo involucra dos roles; **master** y **develop**, mismos que se describen a continuación:

**Master**

> Principalmente, este rol será el encargo de llevar a cabo la integración del sistema, además de las siguientes responsabilidades:
>
> 1. Llevar a cabo las operaciones de integración entre la rama origin/develop y origin/master.
> 2. Verificar que los números de versiones en la rama master respetan el versionamiento [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).
> 3. Identificar inconsistencias entre la nueva versión y anteriores.

**Developer**

> En cada proyecto se puede contar con 1 o más roles de este tipo y sus principales actividades son:
>
> 1. Participar en la construcción de nuevas funcionalidades sobre un sistema de software.
>
> 2. Construir software de calidad de acuerdo a los estándares definidos en la organización.
>
> 3. Participar en las tareas de integración cuando estas sean solicitadas por el rol master.

## Actividades

Las actividades que se llevan a cabo en el modelo de desarrollo se ilustran en la siguiente gráfica:

![](/assets/img/git/diagram.png)
