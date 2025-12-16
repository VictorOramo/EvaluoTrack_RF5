export const validarExpediente = (req, res, next) => {
  const { numeroExpediente, nombreSolicitante, cedulaSolicitante, direccionInmueble, municipio, provincia } = req.body;
  
  const errores = [];
  
  if (!numeroExpediente || numeroExpediente.trim() === '') {
    errores.push('El número de expediente es obligatorio');
  }
  
  if (!nombreSolicitante || nombreSolicitante.trim() === '') {
    errores.push('El nombre del solicitante es obligatorio');
  }
  
  if (!cedulaSolicitante || cedulaSolicitante.trim() === '') {
    errores.push('La cédula del solicitante es obligatoria');
  } else if (!/^\d{3}-\d{7}-\d{1}$/.test(cedulaSolicitante)) {
    errores.push('Formato de cédula inválido. Use: XXX-XXXXXXX-X');
  }
  
  if (!direccionInmueble || direccionInmueble.trim() === '') {
    errores.push('La dirección del inmueble es obligatoria');
  }
  
  if (!municipio || municipio.trim() === '') {
    errores.push('El municipio es obligatorio');
  }
  
  if (!provincia || provincia.trim() === '') {
    errores.push('La provincia es obligatoria');
  }
  
  if (req.body.estado) {
    const estadosValidos = ['PENDIENTE', 'EN_PROCESO', 'EN_REVISION', 'APROBADO', 'RECHAZADO'];
    if (!estadosValidos.includes(req.body.estado)) {
      errores.push('Estado inválido');
    }
  }
  
  if (errores.length > 0) {
    return res.status(400).json({
      success: false,
      errores
    });
  }
  
  next();
};

export const validarFichaCatastral = (req, res, next) => {
  const { expedienteId, areaTerreno, tipoInmueble } = req.body;
  
  const errores = [];
  
  if (!expedienteId || expedienteId.trim() === '') {
    errores.push('El ID del expediente es obligatorio');
  }
  
  if (!areaTerreno || areaTerreno <= 0) {
    errores.push('El área del terreno es obligatoria y debe ser mayor a 0');
  }
  
  if (!tipoInmueble) {
    errores.push('El tipo de inmueble es obligatorio');
  } else {
    const tiposValidos = ['RESIDENCIAL', 'COMERCIAL', 'INDUSTRIAL', 'AGRICOLA', 'SOLAR', 'MIXTO'];
    if (!tiposValidos.includes(tipoInmueble)) {
      errores.push('Tipo de inmueble inválido');
    }
  }
  
  if (req.body.areaConstruida && req.body.areaConstruida < 0) {
    errores.push('El área construida no puede ser negativa');
  }
  
  if (req.body.numeroPisos && req.body.numeroPisos < 0) {
    errores.push('El número de pisos no puede ser negativo');
  }
  
  if (req.body.valorTerreno && req.body.valorTerreno < 0) {
    errores.push('El valor del terreno no puede ser negativo');
  }
  
  if (req.body.valorConstruccion && req.body.valorConstruccion < 0) {
    errores.push('El valor de construcción no puede ser negativo');
  }
  
  if (errores.length > 0) {
    return res.status(400).json({
      success: false,
      errores
    });
  }
  
  next();
};

export const validarAnexo = (req, res, next) => {
  const { expedienteId, tipoAnexo, nombreArchivo, rutaArchivo, tamanoBytes, mimeType } = req.body;
  
  const errores = [];
  
  if (!expedienteId || expedienteId.trim() === '') {
    errores.push('El ID del expediente es obligatorio');
  }
  
  if (!tipoAnexo) {
    errores.push('El tipo de anexo es obligatorio');
  } else {
    const tiposValidos = ['FOTOGRAFIA', 'PLANO', 'TITULO_PROPIEDAD', 'DOCUMENTO_IDENTIFICACION', 'COORDENADAS', 'OTRO'];
    if (!tiposValidos.includes(tipoAnexo)) {
      errores.push('Tipo de anexo inválido');
    }
  }
  
  if (!nombreArchivo || nombreArchivo.trim() === '') {
    errores.push('El nombre del archivo es obligatorio');
  }
  
  if (!rutaArchivo || rutaArchivo.trim() === '') {
    errores.push('La ruta del archivo es obligatoria');
  }
  
  if (!tamanoBytes || tamanoBytes <= 0) {
    errores.push('El tamaño del archivo es obligatorio y debe ser mayor a 0');
  }
  
  if (!mimeType || mimeType.trim() === '') {
    errores.push('El tipo MIME es obligatorio');
  }
  
  if (errores.length > 0) {
    return res.status(400).json({
      success: false,
      errores
    });
  }
  
  next();
};

export const validarCoordenadas = (req, res, next) => {
  const { latitud, longitud } = req.body;
  
  const errores = [];
  
  if (latitud === undefined || latitud === null) {
    errores.push('La latitud es obligatoria');
  } else if (latitud < -90 || latitud > 90) {
    errores.push('La latitud debe estar entre -90 y 90');
  }
  
  if (longitud === undefined || longitud === null) {
    errores.push('La longitud es obligatoria');
  } else if (longitud < -180 || longitud > 180) {
    errores.push('La longitud debe estar entre -180 y 180');
  }
  
  if (errores.length > 0) {
    return res.status(400).json({
      success: false,
      errores
    });
  }
  
  next();
};
