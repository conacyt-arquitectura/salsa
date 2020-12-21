---
tags:
  - salsa
  - plataforma
---


# Premisas de la Arquitectura

## Contexto general

La arquitectura que se desea desarrollar es mayormente una aplicación empresarial del lado del servidor. Debe admitir una variedad de clientes diferentes, incluidos navegadores de escritorio, navegadores móviles y aplicaciones móviles nativas, enfatizando fuertemente en la comunicación maquita a máquina con sistemas legados del CONACyT. La aplicación también puede exponer una API para ser consumida por terceros. También podría integrarse con otras aplicaciones a través de servicios web o un intermediario de mensajes. La aplicación maneja las solicitudes (solicitudes y mensajes HTTP) mediante la ejecución de la lógica de los aplictivos del CONACyT; acceder a una base de datos; intercambiar mensajes con otros sistemas (MIIC, People Soft, Seminuevos); y devuelve una respuesta HTML / JSON. Existen componentes lógicos correspondientes a diferentes áreas funcionales de la aplicación.

