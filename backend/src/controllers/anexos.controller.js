import prisma from '../config/database.js';

export const crearAnexo = async (req, res) => {
  try {
    const anexo = await prisma.anexo.create({
      data: req.body,
      include: {
        expediente: true
      }
    });
    
    res.status(201).json({
      success: true,
      data: anexo
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

export const listarAnexosPorExpediente = async (req, res) => {
  try {
    const { expedienteId } = req.params;
    
    const anexos = await prisma.anexo.findMany({
      where: { expedienteId },
      orderBy: {
        fechaSubida: 'desc'
      }
    });
    
    res.json({
      success: true,
      data: anexos,
      total: anexos.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const obtenerAnexo = async (req, res) => {
  try {
    const { id } = req.params;
    
    const anexo = await prisma.anexo.findUnique({
      where: { id },
      include: {
        expediente: true
      }
    });
    
    if (!anexo) {
      return res.status(404).json({
        success: false,
        error: 'Anexo no encontrado'
      });
    }
    
    res.json({
      success: true,
      data: anexo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const eliminarAnexo = async (req, res) => {
  try {
    const { id } = req.params;
    
    await prisma.anexo.delete({
      where: { id }
    });
    
    res.json({
      success: true,
      message: 'Anexo eliminado correctamente'
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Anexo no encontrado'
      });
    }
    
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const agregarCoordenadas = async (req, res) => {
  try {
    const { id } = req.params;
    const { latitud, longitud } = req.body;

    // 1. Verificación en consola (Terminal de Node)
    console.log(`>>> INTENTANDO POSTGIS - ID: ${id}`);

    // 2. Usamos executeRawUnsafe con marcadores $1, $2, $3
    // Esto obliga a Postgres a recibir los datos y convertirlos al vuelo
    await prisma.$executeRawUnsafe(
      `UPDATE "anexos" 
       SET "coordenadas" = ST_SetSRID(ST_MakePoint($1, $2), 4326) 
       WHERE "id" = $3::uuid`,
      parseFloat(longitud), 
      parseFloat(latitud), 
      id
    );

    res.json({ success: true, message: "Coordenadas guardadas en PostGIS" });
  } catch (error) {
    console.error("ERROR REAL EN EL SERVIDOR:", error.message);
    res.status(400).json({
      success: false,
      error: "Error de tipos: " + error.message
    });
  }
};
export const obtenerAnexosConCoordenadas = async (req, res) => {
  try {
    const { expedienteId } = req.params;
    
    const anexos = await prisma.$queryRaw`
      SELECT 
        a.id::text,
        a."expedienteId"::text,
        a."tipoAnexo",
        a."nombreArchivo",
        a."rutaArchivo",
        a."tamanoBytes",
        a."mimeType",
        a.descripcion,
        a."fechaSubida",
        ST_AsText(a.coordenadas) as punto,
        ST_X(a.coordenadas) as longitud,
        ST_Y(a.coordenadas) as latitud
        FROM anexos a
        WHERE a."expedienteId" = CAST(${expedienteId} AS uuid)
        AND a.coordenadas IS NOT NULL
      ORDER BY a."fechaSubida" DESC
    `;
    
    res.json({
      success: true,
      data: anexos,
      total: anexos.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
