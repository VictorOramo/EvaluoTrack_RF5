-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "EstadoExpediente" AS ENUM ('PENDIENTE', 'EN_PROCESO', 'EN_REVISION', 'APROBADO', 'RECHAZADO');

-- CreateEnum
CREATE TYPE "TipoInmueble" AS ENUM ('RESIDENCIAL', 'COMERCIAL', 'INDUSTRIAL', 'AGRICOLA', 'SOLAR', 'MIXTO');

-- CreateEnum
CREATE TYPE "EstadoConservacion" AS ENUM ('EXCELENTE', 'BUENO', 'REGULAR', 'MALO', 'RUINA');

-- CreateEnum
CREATE TYPE "SituacionLegal" AS ENUM ('REGULAR', 'IRREGULAR', 'EN_PROCESO', 'LITIGIO');

-- CreateEnum
CREATE TYPE "TipoAnexo" AS ENUM ('FOTOGRAFIA', 'PLANO', 'TITULO_PROPIEDAD', 'DOCUMENTO_IDENTIFICACION', 'COORDENADAS', 'OTRO');

-- CreateTable
CREATE TABLE "expedientes" (
    "id" TEXT NOT NULL,
    "numeroExpediente" TEXT NOT NULL,
    "nombreSolicitante" TEXT NOT NULL,
    "cedulaSolicitante" TEXT NOT NULL,
    "telefonoSolicitante" TEXT,
    "emailSolicitante" TEXT,
    "direccionInmueble" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "estado" "EstadoExpediente" NOT NULL DEFAULT 'PENDIENTE',
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "expedientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fichas_catastrales" (
    "id" TEXT NOT NULL,
    "expedienteId" TEXT NOT NULL,
    "areaTerreno" DOUBLE PRECISION NOT NULL,
    "areaConstruida" DOUBLE PRECISION,
    "tipoInmueble" "TipoInmueble" NOT NULL,
    "numeroPisos" INTEGER,
    "numeroHabitaciones" INTEGER,
    "numeroBanos" INTEGER,
    "antiguedad" INTEGER,
    "estadoConservacion" "EstadoConservacion",
    "tituloPropiedadNumero" TEXT,
    "registroPropiedad" TEXT,
    "situacionLegal" "SituacionLegal" NOT NULL DEFAULT 'REGULAR',
    "valorTerreno" DOUBLE PRECISION,
    "valorConstruccion" DOUBLE PRECISION,
    "valorTotal" DOUBLE PRECISION,
    "moneda" TEXT NOT NULL DEFAULT 'DOP',
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fichas_catastrales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anexos" (
    "id" TEXT NOT NULL,
    "expedienteId" TEXT NOT NULL,
    "tipoAnexo" "TipoAnexo" NOT NULL,
    "nombreArchivo" TEXT NOT NULL,
    "rutaArchivo" TEXT NOT NULL,
    "tamanoBytes" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "coordenadas" geometry(Point, 4326),
    "descripcion" TEXT,
    "fechaSubida" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anexos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "expedientes_numeroExpediente_key" ON "expedientes"("numeroExpediente");

-- CreateIndex
CREATE UNIQUE INDEX "fichas_catastrales_expedienteId_key" ON "fichas_catastrales"("expedienteId");

-- CreateIndex
CREATE INDEX "anexos_expedienteId_idx" ON "anexos"("expedienteId");

-- AddForeignKey
ALTER TABLE "fichas_catastrales" ADD CONSTRAINT "fichas_catastrales_expedienteId_fkey" FOREIGN KEY ("expedienteId") REFERENCES "expedientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anexos" ADD CONSTRAINT "anexos_expedienteId_fkey" FOREIGN KEY ("expedienteId") REFERENCES "expedientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
