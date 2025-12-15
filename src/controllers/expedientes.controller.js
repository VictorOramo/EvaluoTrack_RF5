import prisma from '../config/database.js';

export const crearExpediente = async (req, res) => {
  try {
    const expediente = await prisma.expediente.create({
      data: req.body
    });
    
    res.status(201).json({
      success: true,
      data: expediente
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

export const listarExpedientes = async (req, res) => {
  try {
    const { page = 1, limit = 10, estado } = req.query;
    const skip = (page - 1) * limit;
    
    const where = estado ? { estado } : {};
    
    const [expedientes, total] = await Promise.all([
      prisma.expediente.findMany({
        where,
        skip: parseInt(skip),
        take: parseInt(limit),
        include: {
          fichaCatastral: true,
          anexos: true
        },
        orderBy: {
          fechaCreacion: 'desc'
        }
      }),
      prisma.expediente.count({ where })
    ]);
    
    res.json({
      success: true,
      data: expedientes,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const obtenerExpediente = async (req, res) => {
  try {
    const { id } = req.params;
    
    const expediente = await prisma.expediente.findUnique({
      where: { id },
      include: {
        fichaCatastral: true,
        anexos: true
      }
    });
    
    if (!expediente) {
      return res.status(404).json({
        success: false,
        error: 'Expediente no encontrado'
      });
    }
    
    res.json({
      success: true,
      data: expediente
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const actualizarExpediente = async (req, res) => {
  try {
    const { id } = req.params;
    
    const expediente = await prisma.expediente.update({
      where: { id },
      data: req.body
    });
    
    res.json({
      success: true,
      data: expediente
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Expediente no encontrado'
      });
    }
    
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

export const eliminarExpediente = async (req, res) => {
  try {
    const { id } = req.params;
    
    await prisma.expediente.delete({
      where: { id }
    });
    
    res.json({
      success: true,
      message: 'Expediente eliminado correctamente'
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Expediente no encontrado'
      });
    }
    
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

