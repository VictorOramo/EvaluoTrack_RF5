import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed de la base de datos...');

  console.log('Limpiando datos anteriores...');
  await prisma.anexo.deleteMany();
  await prisma.fichaCatastral.deleteMany();
  await prisma.expediente.deleteMany();

  console.log('Creando expediente 1...');
  const expediente1 = await prisma.expediente.create({
    data: {
      numeroExpediente: 'EXP-2025-0001',
      nombreSolicitante: 'Juan Pérez García',
      cedulaSolicitante: '001-1234567-8',
      telefonoSolicitante: '809-555-1234',
      emailSolicitante: 'juan.perez@email.com',
      direccionInmueble: 'Calle Principal #45, Los Prados',
      municipio: 'Santo Domingo Este',
      provincia: 'Santo Domingo',
      estado: 'EN_PROCESO',
      fichaCatastral: {
        create: {
          areaTerreno: 250.5,
          areaConstruida: 180.0,
          tipoInmueble: 'RESIDENCIAL',
          numeroPisos: 2,
          numeroHabitaciones: 3,
          numeroBanos: 2,
          antiguedad: 5,
          estadoConservacion: 'BUENO',
          tituloPropiedadNumero: 'TIT-2020-4567',
          registroPropiedad: 'REG-SD-2020-890',
          situacionLegal: 'REGULAR',
          valorTerreno: 3500000,
          valorConstruccion: 4500000,
          valorTotal: 8000000,
          moneda: 'DOP'
        }
      },
      anexos: {
        create: [
          {
            tipoAnexo: 'FOTOGRAFIA',
            nombreArchivo: 'fachada-principal.jpg',
            rutaArchivo: '/uploads/exp-0001/fachada.jpg',
            tamanoBytes: 2048576,
            mimeType: 'image/jpeg',
            descripcion: 'Fotografía de la fachada principal'
          },
          {
            tipoAnexo: 'PLANO',
            nombreArchivo: 'plano-arquitectonico.pdf',
            rutaArchivo: '/uploads/exp-0001/plano.pdf',
            tamanoBytes: 1024000,
            mimeType: 'application/pdf',
            descripcion: 'Plano arquitectónico del inmueble'
          }
        ]
      }
    }
  });

  console.log('✓ Expediente 1 creado:', expediente1.numeroExpediente);

  console.log('Creando expediente 2 con coordenadas...');
  const expediente2 = await prisma.expediente.create({
    data: {
      numeroExpediente: 'EXP-2025-0002',
      nombreSolicitante: 'María Rodríguez Luna',
      cedulaSolicitante: '001-9876543-2',
      telefonoSolicitante: '809-555-5678',
      direccionInmueble: 'Av. Winston Churchill #123',
      municipio: 'Distrito Nacional',
      provincia: 'Distrito Nacional',
      estado: 'PENDIENTE',
      fichaCatastral: {
        create: {
          areaTerreno: 500.0,
          areaConstruida: 350.0,
          tipoInmueble: 'COMERCIAL',
          numeroPisos: 3,
          estadoConservacion: 'EXCELENTE',
          situacionLegal: 'REGULAR',
          valorTerreno: 8000000,
          valorConstruccion: 12000000,
          valorTotal: 20000000,
          moneda: 'DOP'
        }
      }
    }
  });

  await prisma.$executeRaw`
    INSERT INTO anexos (id, "expedienteId", "tipoAnexo", "nombreArchivo", "rutaArchivo", 
                        "tamanoBytes", "mimeType", coordenadas, descripcion, "fechaSubida")
    VALUES (
      gen_random_uuid(),
      ${expediente2.id},
      'COORDENADAS',
      'coordenadas-gps.json',
      '/uploads/exp-0002/coords.json',
      512,
      'application/json',
      ST_SetSRID(ST_MakePoint(-69.9312, 18.4861), 4326),
      'Coordenadas GPS del inmueble en Santo Domingo',
      CURRENT_TIMESTAMP
    )
  `;

  console.log('✓ Expediente 2 creado con coordenadas:', expediente2.numeroExpediente);

  console.log('Creando expediente 3...');
  const expediente3 = await prisma.expediente.create({
    data: {
      numeroExpediente: 'EXP-2025-0003',
      nombreSolicitante: 'Carlos Martínez Santos',
      cedulaSolicitante: '001-5555555-5',
      telefonoSolicitante: '829-555-9999',
      direccionInmueble: 'Carretera Mella Km 8',
      municipio: 'Santo Domingo Este',
      provincia: 'Santo Domingo',
      estado: 'APROBADO',
      fichaCatastral: {
        create: {
          areaTerreno: 1000.0,
          tipoInmueble: 'INDUSTRIAL',
          situacionLegal: 'REGULAR',
          valorTerreno: 15000000,
          valorTotal: 15000000,
          moneda: 'DOP'
        }
      },
      anexos: {
        create: [
          {
            tipoAnexo: 'TITULO_PROPIEDAD',
            nombreArchivo: 'titulo-propiedad.pdf',
            rutaArchivo: '/uploads/exp-0003/titulo.pdf',
            tamanoBytes: 856000,
            mimeType: 'application/pdf',
            descripcion: 'Título de propiedad original'
          }
        ]
      }
    }
  });

  console.log('✓ Expediente 3 creado:', expediente3.numeroExpediente);

  console.log('\n✓ Seed completado exitosamente');
  console.log(`Total expedientes: 3`);
  console.log(`Total fichas catastrales: 3`);
  console.log(`Total anexos: 5`);
}

main()
  .catch((e) => {
    console.error('Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
