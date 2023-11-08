import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // TODO: create users
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'Marcos',
  //     email: 'marcos@pgmail.com',
  //   }
  // });
  // console.log({ newUser });

  // TODO: list users
  // const users = await prisma.user.findMany();
  // console.log({ users });

  // TODO: find users
  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: 1
  //   }
  // });
  // console.log({ user })

  // TODO: delete users
  // try {
  //   const user = await prisma.user.delete({
  //     where: {
  //       id: 3
  //     }
  //   });
  //   console.log({ user })
  // } catch (error) {
  //   console.log(error.message);
  // }

  // TODO: update users
  // try {
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 4
  //     },
  //     data: {
  //       lastName: 'Silva',
  //     }
  //   });
  //   console.log({ user })
  // } catch (error) {
  //   console.log(error.message);
  // }

  // TODO: update or insert users

  try {
    const user = await prisma.user.upsert({
      where: {
        email: 'jhon@gmail.com'
      },
      create: {
        name: 'Jhon',
        email: 'jhon@gmail.com'
      },
      update: {
        lastName: 'Smith',
      }
    });
    console.log({ user })
  } catch (error) {
    console.log(error.message);
  }


}

main();