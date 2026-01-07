#!/usr/bin/env ts-node
import { spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const cwd = process.cwd();
const isCI = process.env.CI === 'true';

async function runCommand(cmd: string, args: string[]): Promise<number> {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { cwd, stdio: 'inherit' });
    child.on('close', (code) => resolve(code || 0));
  });
}

async function main() {
  console.log('🔧 Setting up database...\n');

  try {
    // Check if .env file exists
    const envPath = path.join(cwd, '.env');
    if (!fs.existsSync(envPath)) {
      console.warn(
        '⚠️  .env file not found. Please create one with DATABASE_URL before proceeding.',
      );
      if (!isCI) {
        process.exit(1);
      }
    }

    // Run migrations
    console.log('📦 Running database migrations...');
    const migrateCode = await runCommand('npx', [
      'prisma',
      'migrate',
      'deploy',
    ]);
    if (migrateCode !== 0) {
      console.error('❌ Migration failed');
      process.exit(migrateCode);
    }
    console.log('✅ Migrations completed\n');

    // Run seed
    console.log('🌱 Seeding database...');
    const seedCode = await runCommand('npx', ['prisma', 'db', 'seed']);
    if (seedCode !== 0) {
      console.error('❌ Seeding failed');
      process.exit(seedCode);
    }
    console.log('✅ Seeding completed\n');

    console.log('🎉 Database setup complete!');
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
}

main();
