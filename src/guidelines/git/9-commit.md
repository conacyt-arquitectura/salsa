---
tags:
  - rama
  - master
---

# Lineamientos para mensajes de _Commits_


Todo desarrollardor de software en el CONACYT, deberá de utilizar el [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) cada vez que tenga que crear un _commit_, de tal manera que otros desarrolladores puedan enteder los campos que se están subiendo y sea más fácil conocer lo que se está versionando.

De manera general, el mensaje de un _commit_ deberá de tenera la siguiente estructura:

```
<type>([optional scope]): <description>

[optional body]

[optional footer(s)]
```

en dónde `<type>` puede ser alguno de los siguientes:

* `feat`:  Introduce nuevas funcionalidades en el sistema (se correlaciona con `MINOR` en el versionado semántico).
* `fix`: Corrige un bug en el código fuente (se correlaciona con `PATCH` en el versionado semántico).
* `build`: Afectan la construcción del proyecto o de dependencias externas (ejemplo de scopes: gulp, broccoli, npm)
* `ci`: Cambios en los archivos de configuración de CI (ejemplo de scopes: Travis, Circle, BrowserStack, SauceLabs)
* `docs`: Cambios en la documentación del proyecto (ejemplo de scopes: Readme)
* `perf`: Cambio en el código para mejorar el desempeño del sistema
* `refactor`: Cambio en el código que no sea para corregir un bug ni para agregar una nueva funcionalidad
* `style`: Cambios que sólo afectan el significado del código (espacios en blanco, formato, semi-colons faltantes, etc)
* `test`: Agregar pruebas o corregir las existentes

en dónde `<scope>` puede ser alguno de los siguientes:
