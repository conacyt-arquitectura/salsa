---
tags:
  - rama
  - master
---

# Lineamientos para versionar

La notación para **versionamiento** se ocupa en tres lugares: **(1)** Descriptor del Projecto _(ej. package.json, pom.xml)_, **(2)** Tag del commit que se está liberando _(ej. tag en commit the rama master)_, **(3)** Build del código fuente _(ej. .jar, .dll, etc)_
{: .note}

El estándar para versionamiento, está basado en [Semantic 2.0.0](https://semver.org/)


1. Un número normal de versión **DEBE** tomar la forma `X.Y.Z` donde `X`, `Y`, y `Z` son enteros no negativos. `X` es la versión **“major”**, `Y` es la versión **“minor”**, y `Z` es la versión **“patch”**. Cada elemento **DEBE** incrementarse numéricamente en incrementos de 1. Por ejemplo: `1.9.0` -> `1.10.0` -> `1.11.0`

2. Una vez que un paquete versionado ha sido liberado **(release)**, los contenidos de esa versión **NO DEBEN** ser modificadas. Cualquier modificación **DEBE** ser liberada como una nueva versión

3. La versión `major` en cero `(0.y.z)` es para desarrollo inicial. Cualquier cosa puede cambiar en cualquier momento. El API pública no debiera ser considerada estable

4. La versión `1.0.0` define el API pública. La forma en que el número de versión es incrementado después de este release depende de esta API pública y de cómo esta cambia

5. La versión `patch` `Z` `(x.y.Z | x > 0)` **DEBE** incrementarse cuando se introducen solo arreglos compatibles con la versión anterior. Un arreglo de bug se define como un cambio interno que corrige un comportamiento erróneo

6. La versión `minor` `Y` `(x.Y.z | x > 0)` **DEBE** ser incrementada si se introduce nueva funcionalidad compatible con la versión anterior. Se **DEBE** incrementar si cualquier funcionalidad de la API es marcada como deprecada. **PUEDE** ser incrementada si se agrega funcionalidad o arreglos considerables al código privado. Puede incluir cambios de nivel `patch`. La versión `patch` **DEBE** ser reseteada a 0 cuando la versión `minor` es incrementada

7. La versión `major` `X` `(X.y.z | X > 0)` **DEBE** ser incrementada si cualquier cambio no compatible con la versión anterior es introducida a la API pública. **PUEDE** incluir cambios de nivel `minor` y/o `patch`. Las versiones `patch` y `minor` **DEBEN** ser reseteadas a 0 cuando se incrementa la versión `major`

8. Una versión `pre-release` **PUEDE** ser representada por adjuntar un guión y una serie de identificadores separados por puntos inmediatamente después de la versión `patch`. Los identificadores **DEBEN** consistir solo de caracteres **ASCII** alfanuméricos y el guión `[0-9A-Za-z-]`. Las versiones `pre-release` satisfacen pero tienen una menor precedencia que la versión normal asociada.Ejemplos: `1.0.0-alpha`, `1.0.0-alpha.1`, `1.0.0-0.3.7`, `1.0.0-x.7.z.92`

9. Los `meta-datos` del `build` **PUEDE** ser representada adjuntando un signo más y una serie de identificadores separados por puntos inmediatamente después de la versión `patch` o la `pre-release`. Los identificadores **DEBEN** consistir sólo de caracteres **ASCII** alfanuméricos y el guión `[0-9A-Za-z-]`. Los `meta-datos` del `build` **DEBIERAN** ser ignorados cuando se intenta determinar precedencia de versiones. Luego, dos paquetes con la misma versión pero distinta metadata de build se consideran la misma versión. Ejemplos: `1.0.0-alpha+001`, `1.0.0+20130313144700`, `1.0.0-beta+exp.sha.5114f85`

10. La precedencia se refiere a como son comparadas dos versiones una con la otra cuando son ordeandas. La precedencia **DEBE** ser calculada separando la _versión en major_, _minor_, _patch_ e identificadores `pre-release` en ese orden (La `meta-data` del `build` no figura en la precedencia). Las versiones `major`, `minor`, y `patch` son siempre comparadas numéricamente. La precedencia de `pre-release` **DEBE** ser determinada comparando cada identificador separado por puntos de la siguiente manera: los identificadores que solo consisten de números son comparados numéricamente y los identificadores con letras o guiones son comparados de acuerdo al orden establecido por **ASCII**. Los identificadores numéricos siempre tienen una precedencia menor que los no-numéricos. Ejemplo: `1.0.0-alpha` `<` `1.0.0-alpha.1` `<` `1.0.0-beta.2` `<` `1.0.0-beta.11` `<` `1.0.0-rc.1` `<` `1.0.0`

# Ciclo de versionamiento

Los lineamientos de versionamiento, se deberán de utilizar en momentos diferentes; dependiendo del tipo de proyecto, tamaño del equipo y el plan de iteración. De manera general, se identifican dos grandes fases que gobiernan a cualquier tipo de proyecto: **fase de inicio** y **fase de desarrollo**.

## Fase de  Inicio

### 1. inicialización

```bash
crearRama('from=empty', 'master')
```

#### individual

```bash
clonar(master)
version('0.0.1-SNAPSHOT', pom.xml )-commit-publish
```

### 2. flujo **increment** (arquitectura):

```bash
[update-]develop-commit[-publish]
```

### 3. flujo **release** (release-arquitectura):

#### 3.1 Inicialización

```bash
create('branch', 'release-arquitectura')
version('0.0.z-RC')-commit[-publish]
build('0.0.z-RC+dev#hash')
build('0.0.z-RC+qa#hash')
build('0.0.z-RC+prod#hash')
```

#### 3.1 SubFlujo Pruebas (release-arquitectura) :

```bash
foreach(enviroment = {'qa'})
    until enviroment is stable:
         test-report-solve-version('0.0.(z+1)-RC', pom.xml)-commit-publish]
          build('0.0.z-RC+enviroment #hash')
```

#### 3.2 SubFlujo Pruebas Finalización (release-arquitectura) :

```bash
version('0.0.z-RELEASE', pom.xml)-commit[-publish]
merge('release-arquitectura', 'master')-tag('0.0.z')
```

#### 3.3. Publicación

```bash
build('0.0.z-RELEASE+dev#hash')-publish(dev)
build('0.0.z-RELEASE+qa#hash')-publish(qa)
build('0.0.z-RELEASE+prod#hash')-publish(prod)
crearRama('from=master', 'develop')
version('0.0.z-SNAPSHOT', pom.xml)-commit[-publish]
publish('develop')
```

### 4. Terminación

#### individual

```bash
usarRama('develop')
```

---

# Fase de Desarrollo

## 1. Inicialización

```bash
crearRama(from='develop', 'feature-[nombre]')
version('0.(y+1).0-SNAPSHOT', pom.xml )-commit-publish
```

#### individual

```bash
clonar('feature-[nombre]')
```

### 2. Flujo increment (feature-[nombre]):

```bash
<ciclo>[update-]develop-commit[-publish]
```

## 3. Flujo Release (release-[nombre]):

#### 3.1 Inicialización

```bash
merge('feature-[nombre]', 'develop')-publish
crearRama('from=develop', 'release-[nombre]')
version('0.y.0-RC')-commit[-publish]
build('0.y.0-RC+dev#hash')
build('0.y.0-RC+qa#hash')
build('0.y.0-RC+prod#hash')
```

#### 3.2 SubFlujo Pruebas (release-[nombre]) :

```bash
<ciclo> test-report-solve-version('0.y.(z+1)-RC', pom.xml)-commit-publish]
```

#### 3.3 SubFlujo Pruebas Finalización (release-[nombre]) :

```bash
version('0.y.z-RELEASE', pom.xml)-commit[-publish]
merge('release-[nombre]', 'master')-tag('0.y.z')
```

#### 3.4 Publicar

```bash
merge('release-[nombre]', 'develop')-publish
build('0.y.z-RELEASE+dev#hash')-publish(dev)
build('0.y.z-RELEASE+qa#hash')-publish(qa)
build('0.y.z-RELEASE+prod#hash')-publish(prod)
eliminarRama('release-[nombre]')
```

preparar el siguiente incremento

```bash
version('0.y.z-SNAPSHOT', pom.xml)-commit[-publish]
publish('develop')
```

## 4. Terminación

#### individual

```bash
usarRama('develop')
```
