import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const plainPassword = process.env.SEED_USER_PASSWORD || 'Password123!';
  const hashed = await bcrypt.hash(plainPassword, 10);

  await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {
      password: hashed,
    },
    create: {
      name: 'Alice',
      email: 'alice@example.com',
      password: hashed,
      role: 'author',
      stories: {
        create: { title: 'First Story', content: 'Hello world!' },
      },
    },
  });
  
  console.log('Database seeded successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
