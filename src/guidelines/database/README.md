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
Utilizar `primer_apellido`, en lugar de `PRIMER_APELLIDO` o `Primer_Apellido`.
:::

## No utilizar el tipo de dato como nombre

Los tipos de datos no son nombres. Los nombres de objetos de la base de datos, particularmente las columnas, deberán ser descritas a través de un sustantivo, evitando utilizar palabras que son únicamente tipos de datos como `text` or `timestamp`.

::: ejemplo
Utilizar `create_by`, en lugar de `create_timestamp` o sólo `timestamp`.
:::

## Utilizar guión bajo (_) para separar nombres que tengan más de una palabra

Los nombres de objetos que se componen de varias palabras deben estar separados por `guiones bajos` siguiendo el estilo [snake case](https://en.wikipedia.org/wiki/Snake_case).

::: ejemplo
Utilizar `primer_apellido`, en lugar de `primerApellido` o `primerapellido` .
:::


## Utilizar palabras completas para nombres

Utilizar palabras completas en lugar de abreviaturas; a menos que la palabra se pueda representar a través de [Abreviaturas comúnes](#utilizar-abreviaturas-comunes). Los nombres para describir objetos de negocio, deberán de escritos siempre en Español. En general evitar abreviaturas. PostgreSQL soporta hasta 63 caracteres para identificadores.

::: ejemplo
Utilizar `segundo_apellido`, en lugar de `seg_apellido` o `seg_ap` .
:::


## Utilizar abreviaturas comúnes para nombres

Utilizar abreviaturas comunes en lugar de la palabra completa. Para algunas palabras, es más común ver la abreviatura que la palabra. 

::: ejemplo
Utilizar `i18n`, en lugar de `internationalization`.
Utilizar `l10n`, en lugar de `localization`.
Utilizar `descripcion_en`, en lugar de `descripcion_english` para denotar el lenguaje.
:::

Si existe duda, entonces se deberá de utilizar la palabra completa en español. Debería de ser obvio cuando la abreviatura hace sentido.


## No utilizar palabras reservadas para nombres

Se deberá de evitar el uso de palabras reservadas en la base de datos.

::: ejemplo
Evita utilizar palabras como `user`, `lock` o `table`
:::

(Palabras reservadas para PostgreSQL)[https://www.postgresql.org/docs/9.3/sql-keywords-appendix.html]

(Palabras reservadas para Oracle)[https://docs.oracle.com/database/121/SQLRF/ap_keywd.htm#SQLRF022]


## Nombrar llaves primarias de una columna con `id`

Todas las tablas que tengan una única llave primaria, deberá de llamarse `id`

::: ejemplo

utilizar:
```sql
CREATE TABLE proyecto (id bigint PRIMARY KEY);
```

en lugar de 

```sql
CREATE TABLE proyecto (proyecto_id bigint PRIMARY KEY);
```
:::


## Nombras llaves foránes por su referencia

Las llaves foraneas deberán de ser una combinación del nombre de la tabla a la que se hace referencia y el nombre de la columna referida. `[TABLA_REFERIDA]_[COLUMNA_REFERIDA]`

Para el caso de llaves foráneas, que hacen referencia a una tabla con llave primaria simple, el nombre deberá de ser siempre `[TABLA_REFERIDA]_id`

El nombre del `CONSTRAINT` deberá de cumplir con fk_[TABLA_BASE]_[TABLA_REFERIDA]_id.

::: ejemplo

utilizar

```sql
CREATE TABLE proyecto (
  id            bigint PRIMARY KEY,
  modalidad_id  bigint NOT NULL,
  CONSTRAINT fk_proyecto_modalidad_id FOREIGN KEY (modalidad_id) REFERENCES modalidad(id));
```

En lugar de 

```sql
CREATE TABLE proyecto (
  id            bigint PRIMARY KEY,
  id_modalidad  bigint NOT NULL,
  CONSTRAINT fk_proyecto_modalidad_id FOREIGN KEY (id_modalidad) REFERENCES modalidad(id));
```
:::

## Evitar el uso de prefijos y sufijos

No se deben utilizar `prefijos` o `sufijos` para nombrar elementos dentro la base de dato. Esto incluye:

* Para distinguir tipos de elementos: tabla (`TB_`), vista (`VW_`), procedimientos almacenados (`SP_`), catálogos (`CAT_`), entre otros.
* Para identificar aplicaciones: `registro_usuario`, `evaluacion_usuario`
* Para identificar tipos de datos: `descripcion_tx`, `monto_aprobado_dbl`, `fecha_ministracion_dt`

::: nota
Esta regla no aplica, para lo componentes de seguridad que se utilizan dentro de un microservicio, en donde se debe de distinguir la base de datos que se utiliza para dar acceso a usuarios y que no forman parte del negocio. Para estos elementos se utiliza el  sufijo `core_`
:::

## Nombrar índices de manera explicita

Deberán de describir explicitamente la tabla y las columnas que está haciendo referencia y seguir la nomenclatura de 
`[TABLA_BASE]_ix_[COLUMNA_1]_[COLUMNA_2]...`
