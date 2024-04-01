import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  // create user for me
  const passwordIhsan = await bcrypt.hash('ihsan0693', roundsOfHashing);
  const ihsan = await prisma.user.upsert({
    where: { email: 'ihsanashi@gmail.com' },
    update: {
      password: passwordIhsan,
    },
    create: {
      email: 'ihsanashi@gmail.com',
      password: passwordIhsan,
      username: 'ahmadihsan',
      verified: false,
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
