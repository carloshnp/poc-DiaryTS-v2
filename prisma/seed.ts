import prisma from "../src/config/db.js";

async function main() {
  await prisma.entries.createMany({
    data: [
      {
        id: 1,
        title: "teste",
        text: "isso é um teste",
        viewCount: 2,
      },
      {
        id: 2,
        title: "teste2",
        text: "isso é um teste",
        viewCount: 1,
      },
      {
        id: 4,
        title: "teste 3",
        text: "isso é um teste de edição",
        viewCount: 1,
      },
      {
        id: 5,
        title: "teste 34",
        text: "isso é um teste de validação",
        viewCount: 1,
      },
      {
        id: 6,
        title: "título novo",
        text: "essa é uma entrada nova e atualizada",
        viewCount: 1,
      },
    ],
  });
}

main()
  .then(() => console.log("OK!"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
