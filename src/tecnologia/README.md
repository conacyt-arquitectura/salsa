---
sidebarDepth: 2
tags:
  - tecnologia
---

# Tecnología del CONACYT

En el **CONACYT**, nos preocupa la obsolescencia tecnológica y caer en un *status quo* que no sea favorable para el desarrollo de un ecosistema innovador. Por tal motivo, hemos desarrollado un mecanismo que nos permita monitorear, evaluar y actualizar nuestra tecnología, impulsando la incorporación de nuevas y el fortalecimiento de las actuales. 

En **CONACYT**, el mecanismo empleado para la implementación de nuevas tecnologías lo conocemos como **habilitador**. Un **habilitador** es una técnica, herramienta, plataformas, lenguaje de programación o frameworks que se utiliza al interior de la organización para impulsar todos los esfuerzos para el desarrollo de sistemas de software, en especial, en las actividades que se ejecutan en el contexto de la metodología de **SALSA**; el principal referente tecnológico del **CONACYT**. El descubrimiento, evaluación y adopción de un habilitador es monitoreado a través del [Radar Tecnológico del CONACYT](https://radar.thoughtworks.com/?sheetId=https://docs.google.com/spreadsheets/d/1J_DfU3YC2Ow6xjJvgQ-eNTXjIgs2wdgAswVrsk4w-eo/edit?usp=sharing), herramienta que se encuentra en constante cambio y evaluación.

![image alt text](/assets/img/tecnologia/image_0.png)

De esta manera, nuestros **habilitadores** tecnológicos se dividen en 4 grandes grupos:

1. Técnicas

2. Herramientas

3. Plataformas

4. Lenguajes y Frameworks

Cada uno de estos grupos, es empleado como un cuadrante dentro del **Radar Tecnológico del CONACYT**.

![image alt text](/assets/img/tecnologia/image_1.png)

A su vez, en cada cuadrante se encuentra segmentado por cuatro semicírculos, los cuales representan el estado de adopción de en el que un **habilitador** puede estar. Tenemos cuatro estados por los cuales pasa un **habilitador**:

![image alt text](/assets/img/tecnologia/image_2.png)

1. **Evaluar**: en este estado se encuentran los **habilitadores **que han sido identificados como tecnologías relevantes que vale la pena evaluar y probar para que posteriormente se pueda adoptar.

2. **Probar**: en este estado se encuentran los **habilitadores** que se han evaluado y que se ha considerado que vale la pena realizar una prueba de concepto y verificar su valor, para que posteriormente, se pueda pasar a documentar y adoptar.

3. **Adoptar**: en este estado se encuentran los habilitadores que se han probado y que han cumplido con las expectativas técnicas que se requiere para poder adoptar al interior de la organización. Para que un habilitador pase del estado de Adoptar a Implantado, se deberán de cumpliar las siguientes condiciones:

    1. Se ha creado uno o más codelabs y se ha publicado en la herramienta de administración de codelabs.

    2. Se ha identificado la categoría y subcategoría del habilitador, de tal manera que los equipos de trabajo de la CRIP, puedan generar preguntas dentro del foro oficial de la CRIP

    3. Se han creado las políticas y lineamientos sobre el habilitador, de tal manera que se pueda publicar en el sitio oficial de SALSA

    4. Se ha identificado al Talento que puede ayudar en el proceso de implantación con los otros equipos de trabajo, de tal manera que todos los integrantes del CRIP lo puedan consultar en caso de que existan dudas.

4. **Implantado**, en este estado se encuentran los **habilitadores** que han sido utilizados ya en proyectos reales del **CONACYT** y que los equipos de trabajo utilizan. 

A continuación, se describen brevemente todos los habilitadores que forman parte del radar tecnológico del CONACYT.

## Técnicas

### Lineamientos de Seguridad

1. OWASP Top 10 Most Critical Web Application Security Risks

2. Java coverage of OWASP TOP 10 2017

3. The CERT Oracle Secure Coding Standard for Java

4. Secure Coding Guidelines for Developers

5. CWE/SANS TOP 25 Most Dangerous Software Errors

6. 2020 CWE Top 25 Most Dangerous Software *Weaknesses*

7. rfc6749 OAUTH 2.0

### Estándares de Interoperabilidad y protocolos

1. OpenAPI 3.0

2. RESTFull

3. JSON Schema

### Lineamientos para la administración de código

1. Semantic Versioning 2.0.0

2. Conventional Commits 1.0.0

3. Git flow

4. Code Conventions for the Java TM Programming Language

### Paradigmas para el diseño de sistemas

1. Lean Architecture

2. API-First development

3. Domain Driven Design

4. Arquitectura orientada a microservicios

5. Arquitectura Hexagonal

6. Infrastructure as a Code

7. Diagram as a Code

### Paradigmas para organizar el trabajo

1. Essence 1.2

2. Lean software development

3. Scrumban

4. Team topology

## Herramientas

### Monitoreo

1. Jhipster registry monitoring

2. Micrometer

3. ELK Stack (Elasticsearch, Logstash, Kibana)

### Administración y construcción del proyecto

1. Git

2. nvm para el manejo de versiones de node

3. node >= 10.17.0

4. npm >= 6.13.4

5. webpack 4.43.0

6. maven

### *Linting* para la auditoría de código

1. sonarqube para todo el proyecto en general

2. ESLint con prettier para javascript

### Despliegue de aplicaciones

1. Docker, 

2. Docker Compose

3. Docker Swarm

4. Portainer para administrar Docker Swarm

5. Drone para CI y CD

6. GitLab CI

### Documentación del proyecto

1. Vue Press

2. Codelabs para la documentación de conocimiento

3. Swagger tools

4. Apicurio para el despliegue de la documentación de APIs

### Componentes de arquitectura de software

1. Keycloak para la implementación de OAUTH 2.0

2. API Gateway

3. JHipster Registry

4. Hystrix: a circuit breaker system solving fall-back scenarios on service fails

### IDEs de desarrollo y herramientas

1. Visual Studio Code

2. Jupyter notebook

## Plataformas

### Bases de datos

1. PostgreSQL

2. Mongodb

3. Apache kafka

### Repositorios para el proyecto

1. Gitlab

2. Nexcloud para almacenar los documentos

3. Harbor como registro de contenedores docker

4. Nexus como administrador de componentes

## Lenguajes y frameworks

### Configuración y generación de código

1. JHipster

2. Yeoman generator

3. Vue CLI

### Front end

1. HTML 5

2. CSS3

3. Sass

4. Typescript

5. Javascript

6. Internationalization (i18n)

7. VueJS

8. BootstrapVue

### Backend

1. Java 11 con OpenJDK

2. Python

3. Spring boot

4. Spring security OAUTH2.0 and Open ID Connector

### Acceso a datos

1. Spring Data

2. Spring Data JPA

3. Spring Data MongoDB

4. Liquibase

5. mongobee

### Pruebas

1. Pruebas de desempeño con Gatling.

2. Behaviour-driven tests con Cucumber

3. Prueba de UI

    1. Pruebas unitarias con Jest

    2. Pruebas de integración con Protractor

4. Pruebas de Arquitectura  con ArchUnit

### Correo electrónico

1. Spring Mail
