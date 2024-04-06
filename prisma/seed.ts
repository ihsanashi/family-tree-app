import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  // create user for yourself
  const myEmail = process.env.MY_USER_EMAIL || 'testemail@fam.com';
  const myUsername = process.env.MY_USER_USERNAME || 'supercoolusername';

  const myPassword = await bcrypt.hash(
    process.env.MY_USER_PASSWORD || 'Xs$2w^3Z5f',
    roundsOfHashing,
  );
  const user = await prisma.user.upsert({
    where: { email: myEmail },
    update: {
      password: myPassword,
    },
    create: {
      email: myEmail,
      password: myPassword,
      username: myUsername,
      verified: false,
    },
  });

  console.log(user);
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
