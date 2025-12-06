# Guía de Configuración - EvaluoTrack Backend

Instrucciones para configurar el entorno de desarrollo.

## Requisitos del Sistema

### Todos los Sistemas Operativos

- Node.js 18 o superior
- npm 8 o superior
- Git 2.20 o superior

### Verificación de Versiones
```bash
node -v      # Debe mostrar v18.x.x o superior
npm -v       # Debe mostrar 8.x.x o superior
git --version
```

## Instalación Paso a Paso

### 1. Clonar el Repositorio
```bash
git clone https://github.com/DerlingR/evaluotrack-rf5-backend.git
cd evaluotrack-rf5-backend
```

### 2. Instalar Dependencias
```bash
npm install
```

Este comando instalará:
- Prisma ORM
- Prisma Client
- Otras dependencias del proyecto

### 3. Configurar Variables de Entorno
```bash
cp .env.example .env
```

Editar el archivo `.env` con tu editor preferido:
```bash
# Linux/Mac
nano .env

# Windows
notepad .env
```

Reemplazar `PASSWORD` con la contraseña real (solicitar al Backend).

### 4. Generar Cliente de Prisma
```bash
npx prisma generate
```

Este comando genera el cliente de Prisma basado en el schema definido.

### 5. Verificar Conexión
```bash
npm run test:db
```

Debes ver:
```
✓ Conexión exitosa a Supabase
✓ Versión de PostgreSQL
```

### 6. Verificar PostGIS
```bash
npm run test:postgis
```

Debes ver:
```
✓ PostGIS habilitado. Versión: 3.3
✓ Punto creado: POINT
✓ PostGIS funcionando correctamente
```

### 7. Poblar Base de Datos. Es Opcional
```bash
npm run db:seed
```

Esto crea 3 expedientes de ejemplo con datos de prueba.


## Posibles errores y solución

### Error: Can't reach database server

**Causa:** Problemas de conexión a Supabase.

**Solución:**
1. Verificar que la URL en `.env` es correcta
2. Verificar que el proyecto de Supabase está activo (no pausado)
3. Regenerar cliente: `npx prisma generate`

### Error: Invalid `prisma` invocation

**Causa:** Cliente de Prisma desactualizado.

**Solución:**
```bash
npx prisma generate
```

### Error de permisos en Linux

**Solución:**
```bash
sudo chown -R $USER:$USER ~/.npm
```

### Node.js version muy antigua

**Ubuntu/Debian:**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Windows:**

Descargar instalador desde: https://nodejs.org

**Mac:**
```bash
brew install node@20
```

### Prisma Studio

Interfaz visual para ver y editar datos:
```bash
npm run db:studio
```

Se abre en: http://localhost:5555

### Ver Migraciones Aplicadas
```bash
npx prisma migrate status
```

### Resetear Base de Datos

OJO  Esto elimina todos los datos.
```bash
npm run db:reset
```

### Una vez completada la instalación, revisar.

- [Estructura de Base de Datos](DATABASE.md)
- [Configuración de Supabase](SUPABASE.md)
