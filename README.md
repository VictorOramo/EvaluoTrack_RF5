# EvaluoTrack - Backend (RF5)

Sistema de gestión backend para tasación catastral conforme a normativas de la DGCN.

## Descripción

Este repositorio implementa los requisitos funcionales RF5 del proyecto EvaluoTrack:

- **RF5.1**: Registro de expedientes de tasación
- **RF5.2**: Gestión de ficha catastral (aspectos físicos, jurídicos y económicos)
- **RF5.3**: Gestión de anexos con soporte geoespacial (PostGIS)

## Tecnologías

- Node.js 18+
- PostgreSQL 15 con PostGIS 3.3
- Prisma ORM 5.22
- Supabase

## Requisitos Previos

- Node.js 18 o superior
- npm 8 o superior
- Git

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/DerlingR/evaluotrack-rf5-backend.git
cd evaluotrack-rf5-backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env` y agregar la contraseña de la base de datos (solicitar al Backend Lead).

4. Generar cliente de Prisma:
```bash
npx prisma generate
```

5. Poblar base de datos con datos de prueba:
```bash
npm run db:seed
```

## Estructura del Proyecto

**Carpeta src/config/**
- `database.js` - Configuración de Prisma
- `testConnection.js` - Script de prueba de conexión
- `testPostGIS.js` - Script de validación PostGIS

**Carpeta prisma/**
- `schema.prisma` - Modelos de datos
- `migrations/` - Historial de migraciones
- `seed.js` - Datos de prueba

**Carpeta docs/**
- `Configuraciones.md` - Guía de instalación detallada
- `DATABASE.md` - Estructura de la base de datos
- `SUPABASE.md` - Configuración de Supabase

**Archivos principales:**
- `.env.example` - Plantilla de variables de entorno
- `.gitignore` - Archivos ignorados por Git
- `package.json` - Dependencias y scripts
```

## Modelos de Datos

### Expediente (RF5.1)
Información del solicitante y datos básicos del inmueble para tasación.

### FichaCatastral (RF5.2)
Aspectos físicos, jurídicos y económicos del inmueble conforme a normativas DGCN.

### Anexo (RF5.3)
Documentos adjuntos (fotografías, planos, títulos) con soporte para coordenadas geoespaciales mediante PostGIS.

## Scripts Disponibles
```bash
npm run db:migrate        # Aplicar migraciones a la base de datos
npm run db:deploy         # Aplicar migraciones en producción
npm run db:seed          # Poblar base de datos con datos de prueba
npm run db:studio        # Abrir Prisma Studio (interfaz visual de la BD)
npm run db:reset         # Resetear base de datos (elimina todos los datos)
npm run db:generate      # Regenerar cliente de Prisma
npm run test:db          # Probar conexión a la base de datos
npm run test:postgis     # Validar funcionamiento de PostGIS
```

## Verificación de Instalación

Después de instalar, ejecuta:
```bash
npm run test:db
npm run test:postgis
```

Ambos comandos deben mostrar mensajes de éxito.

## Documentación Adicional

- [Guía de Configuración Completa](docs/Configuraciones.md)
- [Estructura de Base de Datos](docs/DATABASE.md)
- [Configuración de Supabase](docs/SUPABASE.md)

## Equipo
    
**Grupo 3 - UAPA**

## Sprint 1 - Entregables

- Configuración de PostgreSQL + PostGIS en Supabase
- Modelos de datos: Expediente, FichaCatastral, Anexo
- Migraciones de base de datos aplicadas
- Scripts de validación y datos de prueba
- Documentación técnica completa
