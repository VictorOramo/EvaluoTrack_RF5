import prisma from './database.js';

async function testPostGIS() {
  try {
    console.log('Verificando PostGIS...');
    
    const result = await prisma.$queryRaw`SELECT PostGIS_Version() as version;`;
    console.log('✓ PostGIS habilitado. Versión:', result[0].version);
    
    console.log('\nProbando creación de punto geográfico...');
    const point = await prisma.$queryRaw`
      SELECT ST_AsText(ST_SetSRID(ST_MakePoint(-69.9312, 18.4861), 4326)) as punto;
    `;
    console.log('✓ Punto creado:', point[0].punto);
    console.log('  (Coordenadas de Santo Domingo: lng -69.9312, lat 18.4861)');
    
    console.log('\nProbando distancia entre puntos...');
    const distance = await prisma.$queryRaw`
      SELECT ST_Distance(
        ST_SetSRID(ST_MakePoint(-69.9312, 18.4861), 4326)::geography,
        ST_SetSRID(ST_MakePoint(-70.0, 18.5), 4326)::geography
      ) as distancia_metros;
    `;
    console.log('✓ Distancia calculada:', Math.round(distance[0].distancia_metros), 'metros');
    
    console.log('\n✓ PostGIS funcionando correctamente');
    
  } catch (error) {
    console.error('✗ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testPostGIS();
