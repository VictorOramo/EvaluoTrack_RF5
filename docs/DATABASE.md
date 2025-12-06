# Estructura de Base de Datos

Documentación detallada de los modelos de datos implementados en EvaluoTrack.

## Modelos Principales

### Expediente (RF5.1)

Representa una solicitud de tasación catastral.

**Campos:**

- `id` (UUID) - Identificador único del expediente
- `numeroExpediente` (String, único) - Número de expediente formato EXP-YYYY-NNNN
- `nombreSolicitante` (String) - Nombre completo del solicitante
- `cedulaSolicitante` (String) - Cédula de identidad
- `telefonoSolicitante` (String, opcional) - Teléfono de contacto
- `emailSolicitante` (String, opcional) - Correo electrónico
- `direccionInmueble` (String) - Dirección completa del inmueble
- `municipio` (String) - Municipio donde se ubica
- `provincia` (String) - Provincia
- `estado` (Enum) - Estado actual: PENDIENTE, EN_PROCESO, EN_REVISION, APROBADO, RECHAZADO
- `fechaCreacion` (DateTime) - Fecha de creación automática
- `fechaActualizacion` (DateTime) - Última actualización automática

**Relaciones:**

- Tiene una FichaCatastral (opcional)
- Tiene muchos Anexos

---

### FichaCatastral (RF5.2)

Contiene los datos técnicos del inmueble para tasación.

**Aspectos Físicos:**

- `areaTerreno` (Float) - Área del terreno en metros cuadrados
- `areaConstruida` (Float, opcional) - Área construida en metros cuadrados
- `tipoInmueble` (Enum) - RESIDENCIAL, COMERCIAL, INDUSTRIAL, AGRICOLA, SOLAR, MIXTO
- `numeroPisos` (Int, opcional) - Cantidad de pisos
- `numeroHabitaciones` (Int, opcional) - Cantidad de habitaciones
- `numeroBanos` (Int, opcional) - Cantidad de baños
- `antiguedad` (Int, opcional) - Años de antigüedad
- `estadoConservacion` (Enum, opcional) - EXCELENTE, BUENO, REGULAR, MALO, RUINA

**Aspectos Jurídicos:**

- `tituloPropiedadNumero` (String, opcional) - Número del título de propiedad
- `registroPropiedad` (String, opcional) - Número de registro
- `situacionLegal` (Enum) - REGULAR, IRREGULAR, EN_PROCESO, LITIGIO

**Aspectos Económicos:**

- `valorTerreno` (Float, opcional) - Valor del terreno en DOP
- `valorConstruccion` (Float, opcional) - Valor de la construcción en DOP
- `valorTotal` (Float, opcional) - Valor total del inmueble en DOP
- `moneda` (String) - Moneda, por defecto "DOP"

**Otros:**

- `id` (UUID) - Identificador único
- `expedienteId` (UUID, único) - Referencia al expediente
- `fechaCreacion` (DateTime) - Fecha de creación automática
- `fechaActualizacion` (DateTime) - Última actualización automática

**Relaciones:**

- Pertenece a un Expediente

---

### Anexo (RF5.3)

Documentos y archivos adjuntos al expediente con soporte geoespacial.

**Campos:**

- `id` (UUID) - Identificador único
- `expedienteId` (UUID) - Referencia al expediente
- `tipoAnexo` (Enum) - FOTOGRAFIA, PLANO, TITULO_PROPIEDAD, DOCUMENTO_IDENTIFICACION, COORDENADAS, OTRO
- `nombreArchivo` (String) - Nombre del archivo
- `rutaArchivo` (String) - Ruta donde se almacena el archivo
- `tamanoBytes` (Int) - Tamaño del archivo en bytes
- `mimeType` (String) - Tipo MIME del archivo
- `coordenadas` (Geometry Point, opcional) - Coordenadas GPS del inmueble (PostGIS)
- `descripcion` (String, opcional) - Descripción del anexo
- `fechaSubida` (DateTime) - Fecha de subida automática

**Relaciones:**

- Pertenece a un Expediente

**Nota sobre coordenadas:**

Las coordenadas usan el sistema de referencia WGS84 (SRID 4326), compatible con GPS y servicios de mapas como Google Maps. Se almacenan como tipo geometry(Point, 4326) de PostGIS.

---

## Enumeraciones

**EstadoExpediente:**
- PENDIENTE
- EN_PROCESO
- EN_REVISION
- APROBADO
- RECHAZADO

**TipoInmueble:**
- RESIDENCIAL
- COMERCIAL
- INDUSTRIAL
- AGRICOLA
- SOLAR
- MIXTO

**EstadoConservacion:**
- EXCELENTE
- BUENO
- REGULAR
- MALO
- RUINA

**SituacionLegal:**
- REGULAR
- IRREGULAR
- EN_PROCESO
- LITIGIO

**TipoAnexo:**
- FOTOGRAFIA
- PLANO
- TITULO_PROPIEDAD
- DOCUMENTO_IDENTIFICACION
- COORDENADAS
- OTRO

---

## Diagrama de Relaciones

Un Expediente puede tener:
- 1 FichaCatastral (relación uno a uno)
- Múltiples Anexos (relación uno a muchos)

Si se elimina un Expediente, se eliminan automáticamente su FichaCatastral y todos sus Anexos (CASCADE).

---

## Migraciones

Las migraciones se encuentran en la carpeta `prisma/migrations/`.

Para aplicar migraciones:
```bash
npm run db:migrate
```

Para ver el estado de las migraciones:
```bash
npx prisma migrate status
```

---

## Datos de Ejemplo

El proyecto incluye un script de seed con 3 expedientes de ejemplo:

- EXP-2025-0001: Inmueble residencial en Santo Domingo Este
- EXP-2025-0002: Inmueble comercial en Distrito Nacional (con coordenadas GPS)
- EXP-2025-0003: Solar industrial en Santo Domingo Este

Para cargar los datos de ejemplo:
```bash
npm run db:seed
```
