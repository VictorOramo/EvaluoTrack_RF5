import prisma from './database.js';

async function testConnection() {
  try {
    console.log('Probando conexión a la base de datos...');
    
    await prisma.$connect();
    console.log('✓ Conexión exitosa a Supabase');
    
    const result = await prisma.$queryRaw`SELECT version();`;
    console.log('✓ Versión de PostgreSQL:', result[0].version);
    
  } catch (error) {
    console.error('✗ Error de conexión:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
