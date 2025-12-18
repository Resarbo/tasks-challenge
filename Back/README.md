# 🧩 Management Task Microservice (Reto tecnico)

Microservicio RESTful para la gestión de tareas personales, utilizando **.NET 8**, **Clean Architecture** y **SQL Server**.

---

## 📌 Descripción

Este microservicio permite:

- Listar tareas personales
- Filtrar tareas por **estado** y **prioridad**
- Visualizar información detallada de cada tarea

El diseño está pensado como si fuera parte de un **proyecto empresarial escalable**, manteniendo una separación clara de responsabilidades y buenas prácticas de arquitectura.

---

## 🏗️ Arquitectura

La solución implementa **Clean Architecture**, separando el sistema en capas bien definidas:

```text
ManagementTask.Api
ManagementTask.Application
ManagementTask.Domain
ManagementTask.Infrastructure
ManagementTask.Tests
```

### 🧱 Responsabilidades por capa

#### **Domain**

- Entidades del negocio (`Task`, `TaskStatus`, `TaskPriority`)

#### **Application**

- Casos de uso (ej: `GetTasks`)
- Interfaces (contratos) para acceso a datos
- DTOs de salida
- Orquesta el dominio

#### **Infrastructure**

- Implementaciones técnicas
- Acceso a datos con **Dapper**
- Ejecución de **procedimientos almacenados**
- Repositorios y factories de conexión

#### **API**

- Adaptador HTTP
- Exposición de endpoints REST
- Configuración de dependencias (Composition Root)
- Swagger / OpenAPI

#### **Tests**

- Pruebas unitarias de la capa Application
- Uso de mocks para aislar dependencias
- No depende de base de datos ni infraestructura

---

## 🔄 Flujo de la aplicación

```text
HTTP Request
   ↓
Controller (API)
   ↓
Use Case / Handler (Application)
   ↓
Repository Interface (Application)
   ↓
Repository Implementation (Infrastructure)
   ↓
Stored Procedure (SQL Server)
```

---

## 🗄️ Base de Datos

- Motor: **SQL Server**
- Acceso mediante **procedimientos almacenados**
- ORM ligero: **Dapper**

### Tablas principales

- `Task`
- `TaskStatus`
- `TaskPriority`

### Stored Procedure

- `SP_Task_Get_Info`

  - Permite filtrar tareas por `StatusId` y `PriorityId`

---

## 🌐 Endpoints

### Obtener tareas (con filtros opcionales)

```http
GET /api/tasks
GET /api/tasks?statusId=1
GET /api/tasks?priorityId=2
GET /api/tasks?statusId=1&priorityId=2
```

### Respuesta ejemplo

```json
[
  {
    "id": 1,
    "title": "Implementar Clean Architecture",
    "description": "Crear estructura base del proyecto",
    "status": "Open",
    "priority": "High",
    "createdAt": "2024-01-10T18:30:00Z"
  }
]
```

---

## 🧪 Pruebas Unitarias

La solución incluye un proyecto de pruebas unitarias:

- Framework: **xUnit**
- Mocking: **Moq**
- Assertions: **FluentAssertions**

### Alcance de las pruebas

- Casos de uso de la capa **Application**
- No se prueban controllers ni base de datos (eso correspondería a pruebas de integración)

Esto permite:

- Alta testabilidad
- Ejecución rápida
- Aislamiento de dependencias técnicas

---

## ⚙️ Configuración

### appsettings.json

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=ManagementTaskDb;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

---

## 🚀 Ejecución del proyecto

1. Clonar el repositorio
2. Ejecutar los scripts SQL (tablas + stored procedures)
3. Configurar la cadena de conexión
4. Ejecutar la API
5. Acceder a Swagger:

```
https://localhost:{puerto}/swagger
```

---

## 📚 Tecnologías utilizadas

- .NET 8
- ASP.NET Core Web API
- Dapper
- SQL Server
- xUnit, Moq, FluentAssertions
- Swagger / OpenAPI

---

## ✍️ Autor

**Cesar Fabian Tapia Moran**

---

## ✅ Estado del proyecto

✔️ Funcional
✔️ Arquitectura escalable
✔️ Buenas prácticas aplicadas
✔️ Listo para evaluación técnica
