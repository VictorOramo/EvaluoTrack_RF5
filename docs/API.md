# Documentación de API REST - EvaluoTrack

API REST para el sistema de tasación catastral EvaluoTrack.

## URL Base
```
http://localhost:3000
```

## Formato de Respuestas

Todas las respuestas tienen el siguiente formato:

**Respuesta exitosa:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Respuesta con error:**
```json
{
  "success": false,
  "error": "Mensaje de error",
  "errores": ["error 1", "error 2"]
}
```

---

## Endpoints de Expedientes

### Crear Expediente

**POST** `/api/expedientes`

**Body:**
```json
{
  "numeroExpediente": "EXP-2025-0004",
  "nombreSolicitante": "Ana García López",
  "cedulaSolicitante": "001-1234567-8",
  "telefonoSolicitante": "809-555-0000",
  "emailSolicitante": "ana@email.com",
  "direccionInmueble": "Calle Ejemplo #10",
  "municipio": "Santo Domingo",
  "provincia": "Distrito Nacional",
  "estado": "PENDIENTE"
}
```

**Campos obligatorios:**
- `numeroExpediente`
- `nombreSolicitante`
- `cedulaSolicitante` (formato: XXX-XXXXXXX-X)
- `direccionInmueble`
- `municipio`
- `provincia`

**Respuesta exitosa (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid-generado",
    "numeroExpediente": "EXP-2025-0004",
    ...
  }
}
```

---

### Listar Expedientes

**GET** `/api/expedientes`

**Query params (opcionales):**
- `page` (default: 1)
- `limit` (default: 10)
- `estado` (PENDIENTE, EN_PROCESO, EN_REVISION, APROBADO, RECHAZADO)

**Ejemplos:**
```bash
GET /api/expedientes
GET /api/expedientes?page=2&limit=5
GET /api/expedientes?estado=PENDIENTE
```

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "pages": 3
  }
}
```

---

### Obtener Expediente por ID

**GET** `/api/expedientes/:id`

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "numeroExpediente": "EXP-2025-0001",
    "fichaCatastral": { ... },
    "anexos": [ ... ]
  }
}
```

**Respuesta error (404):**
```json
{
  "success": false,
  "error": "Expediente no encontrado"
}
```

---

### Actualizar Expediente

**PUT** `/api/expedientes/:id`

**Body:** Mismos campos que crear (todos opcionales en actualización)

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": { ... }
}
```

---

### Eliminar Expediente

**DELETE** `/api/expedientes/:id`

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "message": "Expediente eliminado correctamente"
}
```

**Nota:** Al eliminar un expediente, también se eliminan su ficha catastral y anexos (CASCADE).

---

## Endpoints de Fichas Catastrales

### Crear Ficha Catastral

**POST** `/api/fichas`

**Body:**
```json
{
  "expedienteId": "uuid-del-expediente",
  "areaTerreno": 250.5,
  "areaConstruida": 180.0,
  "tipoInmueble": "RESIDENCIAL",
  "numeroPisos": 2,
  "numeroHabitaciones": 3,
  "numeroBanos": 2,
  "antiguedad": 5,
  "estadoConservacion": "BUENO",
  "tituloPropiedadNumero": "TIT-2020-1234",
  "registroPropiedad": "REG-SD-2020-567",
  "situacionLegal": "REGULAR",
  "valorTerreno": 3500000,
  "valorConstruccion": 4500000,
  "valorTotal": 8000000,
  "moneda": "DOP"
}
```

**Campos obligatorios:**
- `expedienteId`
- `areaTerreno` (mayor a 0)
- `tipoInmueble` (RESIDENCIAL, COMERCIAL, INDUSTRIAL, AGRICOLA, SOLAR, MIXTO)

**Respuesta exitosa (201):**
```json
{
  "success": true,
  "data": { ... }
}
```

---

### Obtener Ficha por Expediente

**GET** `/api/fichas/expediente/:expedienteId`

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "expedienteId": "uuid",
    "areaTerreno": 250.5,
    ...
  }
}
```

---

### Actualizar Ficha Catastral

**PUT** `/api/fichas/:id`

**Body:** Mismos campos que crear

---

### Eliminar Ficha Catastral

**DELETE** `/api/fichas/:id`

---

## Endpoints de Anexos

### Crear Anexo

**POST** `/api/anexos`

**Body:**
```json
{
  "expedienteId": "uuid-del-expediente",
  "tipoAnexo": "FOTOGRAFIA",
  "nombreArchivo": "fachada.jpg",
  "rutaArchivo": "/uploads/fachada.jpg",
  "tamanoBytes": 2048576,
  "mimeType": "image/jpeg",
  "descripcion": "Foto de la fachada principal"
}
```

**Campos obligatorios:**
- `expedienteId`
- `tipoAnexo` (FOTOGRAFIA, PLANO, TITULO_PROPIEDAD, DOCUMENTO_IDENTIFICACION, COORDENADAS, OTRO)
- `nombreArchivo`
- `rutaArchivo`
- `tamanoBytes` (mayor a 0)
- `mimeType`

---

### Listar Anexos por Expediente

**GET** `/api/anexos/expediente/:expedienteId`

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": [ ... ],
  "total": 3
}
```

---

### Obtener Anexo por ID

**GET** `/api/anexos/:id`

---

### Eliminar Anexo

**DELETE** `/api/anexos/:id`

---

### Agregar Coordenadas a Anexo (PostGIS)

**POST** `/api/anexos/:id/coordenadas`

**Body:**
```json
{
  "latitud": 18.4861,
  "longitud": -69.9312
}
```

**Validaciones:**
- Latitud: entre -90 y 90
- Longitud: entre -180 y 180

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "coordenadasLegibles": {
      "punto": "POINT(-69.9312 18.4861)",
      "longitud": -69.9312,
      "latitud": 18.4861
    }
  }
}
```

---

### Obtener Anexos con Coordenadas

**GET** `/api/anexos/expediente/:expedienteId/coordenadas`

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "tipoAnexo": "COORDENADAS",
      "punto": "POINT(-69.9312 18.4861)",
      "longitud": -69.9312,
      "latitud": 18.4861,
      ...
    }
  ],
  "total": 1
}
```

---

## Códigos de Estado HTTP

- **200** - OK (operación exitosa)
- **201** - Created (recurso creado)
- **400** - Bad Request (validación fallida)
- **404** - Not Found (recurso no encontrado)
- **500** - Internal Server Error (error del servidor)

---

## Ejemplos de Errores

### Error de validación
```json
{
  "success": false,
  "errores": [
    "El número de expediente es obligatorio",
    "Formato de cédula inválido. Use: XXX-XXXXXXX-X"
  ]
}
```

### Recurso no encontrado
```json
{
  "success": false,
  "error": "Expediente no encontrado"
}
```

### Error del servidor
```json
{
  "success": false,
  "error": "Error interno del servidor"
}
```

---

## Notas Importantes

- Todos los IDs son UUID v4
- Las fechas están en formato ISO 8601
- Los valores monetarios están en DOP (pesos dominicanos)
- Las coordenadas usan el sistema WGS84 (SRID 4326)
- La paginación por defecto es 10 elementos por página
- Al eliminar un expediente, se eliminan en cascada sus fichas y anexos

---

## Endpoint de Salud

**GET** `/health`

Verifica que el servidor esté funcionando.

**Respuesta:**
```json
{
  "status": "ok",
  "timestamp": "2025-12-15T10:30:00.000Z"
}
```
