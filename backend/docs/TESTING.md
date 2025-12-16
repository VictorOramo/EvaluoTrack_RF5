# Guía de Pruebas de API

Instrucciones para probar los endpoints de la API EvaluoTrack.

## Herramientas Recomendadas

### 1. REST Client (VSCode Extension)

**Instalar:**
1. Abrir VSCode
2. Ir a Extensions (Ctrl+Shift+X)
3. Buscar "REST Client"
4. Instalar la extensión de Huachao Mao

**Usar:**
1. Abrir el archivo `test-api.http` en VSCode
2. Click en "Send Request" sobre cada petición
3. Ver respuesta en panel lateral

### 2. cURL (Terminal)

**Ejemplos:**

Listar expedientes:
```bash
curl http://localhost:3000/api/expedientes
```

Crear expediente:
```bash
curl -X POST http://localhost:3000/api/expedientes \
  -H "Content-Type: application/json" \
  -d '{
    "numeroExpediente": "EXP-2025-0004",
    "nombreSolicitante": "Ana García",
    "cedulaSolicitante": "001-1234567-8",
    "direccionInmueble": "Calle Ejemplo #10",
    "municipio": "Santo Domingo",
    "provincia": "Distrito Nacional"
  }'
```

### 3. Postman

**Importar colección:**
1. Descargar Postman: https://www.postman.com/downloads/
2. Crear nueva colección
3. Agregar requests manualmente usando la documentación en `docs/API.md`

### 4. Thunder Client (VSCode Extension)

Similar a Postman pero integrado en VSCode.

## Flujo de Prueba Recomendado

### 1. Verificar servidor funcionando
```bash
curl http://localhost:3000/health
```

Debe responder:
```json
{
  "status": "ok",
  "timestamp": "..."
}
```

### 2. Listar expedientes existentes
```bash
curl http://localhost:3000/api/expedientes
```

Debe mostrar los 3 expedientes del seed.

### 3. Crear nuevo expediente

Usar el ejemplo del archivo `test-api.http` o:
```bash
curl -X POST http://localhost:3000/api/expedientes \
  -H "Content-Type: application/json" \
  -d @- << EOF
{
  "numeroExpediente": "EXP-2025-0004",
  "nombreSolicitante": "Prueba Test",
  "cedulaSolicitante": "001-9999999-9",
  "direccionInmueble": "Av. Prueba #1",
  "municipio": "Santo Domingo Este",
  "provincia": "Santo Domingo"
}
EOF
```

Copiar el `id` del expediente creado.

### 4. Crear ficha catastral para ese expediente

Reemplazar `EXPEDIENTE_ID` con el id copiado:
```bash
curl -X POST http://localhost:3000/api/fichas \
  -H "Content-Type: application/json" \
  -d '{
    "expedienteId": "EXPEDIENTE_ID",
    "areaTerreno": 250.0,
    "tipoInmueble": "RESIDENCIAL"
  }'
```

### 5. Crear anexo con coordenadas
```bash
curl -X POST http://localhost:3000/api/anexos \
  -H "Content-Type: application/json" \
  -d '{
    "expedienteId": "EXPEDIENTE_ID",
    "tipoAnexo": "COORDENADAS",
    "nombreArchivo": "ubicacion.json",
    "rutaArchivo": "/uploads/ubicacion.json",
    "tamanoBytes": 100,
    "mimeType": "application/json"
  }'
```

Copiar el `id` del anexo creado.

### 6. Agregar coordenadas GPS al anexo

Reemplazar `ANEXO_ID`:
```bash
curl -X POST http://localhost:3000/api/anexos/ANEXO_ID/coordenadas \
  -H "Content-Type: application/json" \
  -d '{
    "latitud": 18.4861,
    "longitud": -69.9312
  }'
```

### 7. Verificar coordenadas guardadas
```bash
curl http://localhost:3000/api/anexos/expediente/EXPEDIENTE_ID/coordenadas
```

Debe mostrar el anexo con las coordenadas en formato PostGIS.

## Casos de Prueba de Validación

### Expediente con cédula inválida
```bash
curl -X POST http://localhost:3000/api/expedientes \
  -H "Content-Type: application/json" \
  -d '{
    "numeroExpediente": "EXP-2025-0005",
    "nombreSolicitante": "Test",
    "cedulaSolicitante": "123",
    "direccionInmueble": "Test",
    "municipio": "Test",
    "provincia": "Test"
  }'
```

Debe responder con error 400 y mensaje de formato inválido.

### Ficha con área negativa
```bash
curl -X POST http://localhost:3000/api/fichas \
  -H "Content-Type: application/json" \
  -d '{
    "expedienteId": "test-id",
    "areaTerreno": -100,
    "tipoInmueble": "RESIDENCIAL"
  }'
```

Debe responder con errores de validación.

### Coordenadas fuera de rango
```bash
curl -X POST http://localhost:3000/api/anexos/ANEXO_ID/coordenadas \
  -H "Content-Type: application/json" \
  -d '{
    "latitud": 100,
    "longitud": -200
  }'
```

Debe responder con error de validación.

## Notas Importantes

- El servidor debe estar corriendo: `npm run dev`
- Usar IDs reales de la base de datos
- Los datos del seed están disponibles por defecto
- Consultar `docs/API.md` para documentación completa
