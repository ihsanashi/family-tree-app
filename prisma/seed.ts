import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create user for me
  const ihsan = await prisma.user.upsert({
    where: { email: 'ihsanashi@gmail.com' },
    update: {},
    create: {
      email: 'ihsanashi@gmail.com',
      password: 'ihsan060693',
      username: 'ahmadihsan',
      verified: true,
    },
  });

  console.log(ihsan);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit();
  })
  .finally(async () => {
    // Close Prisma Client at the end
    await prisma.$disconnect();
  });
