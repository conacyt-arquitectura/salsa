---
tags:
  - guidelines
  - posgresql
---

# Lineamientos para PostgreSQL

Salsa utiliza PostgreSQL para el almacenamiento de información, por lo tanto, la convención de nombrado de estos linieamientos está pensado para este tipo de base de datos, sin embargo, se debe seguir algo semejante para las bases de datos de Oracle.

Mucho de lo que se defina aquí, también aplicará para las bases de datos  NoSQL que se llegue a utilizar; con sus respetivas adecuaciones.


## Utilizar minúsculas

Todos los nombres deberán de ser escritos en minúsculas. Esto incluye a tablas, vistas, columnas y cualquier otro elemento.

::: ejemplo
Utilizar `first_name`, en lugar de `First_Name`.
:::

## No utilizar tipos de datos como nombres

Los tipos de datos no son nombres. Los nombres de objetos de la base de datos, particularmente las columnas, deberán ser descritas a través de un sustantivo, evitando utilizar palabras que son únicamente tipos de datos como `text` or `timestamp`.

::: ejemplo
Utilizar `create_by`, en lugar de `create_timestamp` o sólo `timestamp`.
:::

## Utilizar guión bajo para separar palabras

Los nombres de objetos que se componen de varias palabras deben estar separados por `guiones bajos` siguiendo el estilo [snake case](https://en.wikipedia.org/wiki/Snake_case).

::: ejemplo
Utilizar `primer_apellido`, en lugar de `primerApellido` o `primerapellido` .
:::


## Utilizar palabras completas

Utilizar palabras completas en lugar de abreviaturas; a menos que la palabra se pueda representar a través de [Abreviaturas comúnes](#utilizar-abreviaturas-comunes). Los nombres para describir objetos de negocio, deberán de escritos siempre en Español. En general evitar abreviaturas. PostgreSQL soporta hasta 63 caracteres para identificadores.

::: ejemplo
Utilizar `segundo_apellido`, en lugar de `seg_apellido` o `seg_ap` .
:::


## Utilizar abreviaturas comúnes

Utilizar abreviaturas comunes en lugar de la palabra completa. Para algunas palabras, es más común ver la abreviatura que la palabra. 

::: ejemplo
Utilizar `i18n`, en lugar de `internationalization`.
Utilizar `l10n`, en lugar de `localization`.
Utilizar `descripcion_en`, en lugar de `descripcion_english` para denotar el lenguaje.
:::

Si existe duda, entonces se deberá de utilizar la palabra completa en español. Debería de ser obvio cuando la abreviatura hace sentido.


## Evitar palabras reservadas. 

Se deberá de evitar el uso de palabras reservadas en la base de datos.

::: ejemplo
Evita utilizar palabras como `user`, `lock` o `table`
:::

* (Palabras reservadas para PostgreSQL)[https://www.postgresql.org/docs/9.3/sql-keywords-appendix.html]
* (Palabras reservadas para Oracle)[https://docs.oracle.com/database/121/SQLRF/ap_keywd.htm#SQLRF022]



## Llave primaria para tablas 

La llave primaria para las tablas, deberá de llamarse `id`. Es un nombre, corto, simple y sin ambiguedad. 

```sql
CREATE TABLE persona (
  id            bigint PRIMARY KEY,
  nombre        text NOT NULL,
  create_date   date NOT NULL);
```


## Llave foránea 

Las llaves foráneas, deberán de ser una combinación del nombre de la tabla de referencia y el nombre del campo referido. 

Foreign key fields should be a combination of the name of the referenced table and the name of the referenced fields. For single column foreign keys (by far the most common case) this will be something like foo_id.

