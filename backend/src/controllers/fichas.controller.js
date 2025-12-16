import prisma from '../config/database.js';

export const crearFicha = async (req, res) => {
  try {
    const ficha = await prisma.fichaCatastral.create({
      data: req.body,
      include: {
        expediente: true
      }
    });
    
    res.status(201).json({
      success: true,
      data: ficha
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({
        success: false,
        error: 'Este expediente ya tiene una ficha catastral'
      });
    }
    
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

export const obtenerFichaPorExpediente = async (req, res) => {
  try {
    const { expedienteId } = req.params;
    
    const ficha = await prisma.fichaCatastral.findUnique({
      where: { expedienteId },
      include: {
        expediente: true
      }
    });
    
    if (!ficha) {
      return res.status(404).json({
        success: false,
        error: 'Ficha catastral no encontrada para este expediente'
      });
    }
    
    res.json({
      success: true,
      data: ficha
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const actualizarFicha = async (req, res) => {
  try {
    const { id } = req.params;
    
    const ficha = await prisma.fichaCatastral.update({
      where: { id },
      data: req.body,
      include: {
        expediente: true
      }
    });
    
    res.json({
      success: true,
      data: ficha
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Ficha catastral no encontrada'
      });
    }
    
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

export const eliminarFicha = async (req, res) => {
  try {
    const { id } = req.params;
    
    await prisma.fichaCatastral.delete({
      where: { id }
    });
    
    res.json({
      success: true,
      message: 'Ficha catastral eliminada correctamente'
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Ficha catastral no encontrada'
      });
    }
    
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
