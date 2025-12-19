# Tasks Challenge – React Native App

Mini aplicación móvil desarrollada en **React Native CLI** que consume un backend en **.NET** para la gestión de tareas personales.

Este proyecto forma parte de un **reto técnico**, con foco en **arquitectura limpia, buenas prácticas y mantenibilidad**, más que en features avanzados o librerías de UI.

---

## 📱 Funcionalidades

- 📋 Listar tareas
- 🔍 Filtrar tareas por **estado** y **prioridad**
- 📄 Visualizar el detalle de una tarea
- 🔄 Consumo de API REST real

Cada tarea contiene:
- Título
- Descripción
- Estado
- Prioridad

---

## 🏗️ Arquitectura

El frontend está estructurado siguiendo principios de **Clean Architecture**, adaptados a React Native:

```text
src/
├── domain/ # Entidades, enums y contratos (reglas de negocio)
├── data/ # Implementaciones concretas (API, repositories)
├── application/ # Hooks / casos de uso
└── presentation/ # UI (screens, navigation, components)
```


### Capas

- **Domain**
  - No depende de ninguna librería externa
  - Define el modelo de negocio
- **Data**
  - Comunicación con la API REST
  - Implementa contratos del dominio
- **Application**
  - Orquesta la lógica de la aplicación (hooks)
- **Presentation**
  - Pantallas, navegación y componentes visuales
  - No contiene lógica de negocio ni acceso a datos

📌 Este enfoque facilita:
- Escalabilidad
- Testabilidad
- Separación clara de responsabilidades

---

## 🧪 Stack Tecnológico

- **React Native CLI**
- **TypeScript**
- **React Navigation**
- **Fetch API**
- **Android (emulador)**

> ❌ No se utilizan UI Kits ni librerías visuales externas, según el requerimiento del reto.


⚠️ El backend debe estar levantado localmente para que la app funcione correctamente.

---

## 🚀 Instalación y ejecución

### Requisitos
- Node.js `>= 18`
- NPM
- Android Studio
- Android SDK + NDK
- Emulador Android o dispositivo físico

### Instalación
```bash
npm install
```

