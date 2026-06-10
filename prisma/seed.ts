import { PrismaClient } from "@prisma/client";
import artworks from "./data.json";

const prisma = new PrismaClient();

async function main() {
  for (const artworkData of artworks) {
    /*
    ============================
    USER
    ============================
    */

    const user = await prisma.user.upsert({
      where: {
        id: artworkData.user.id,
      },

      update: {},

      create: {
        id: artworkData.user.id,
        name: artworkData.user.name,
      },
    });

    /*
    ============================
    ARTWORK
    ============================
    */

    const artwork = await prisma.artwork.upsert({
      where: {
        sku: artworkData.sku,
      },

      update: {},

      create: {
        title: artworkData.title,
        product: artworkData.product,

        sku: artworkData.sku,
        slug: artworkData.slug,

        description: artworkData.description,

        skala: artworkData.skala,
        orientasi: artworkData.orientasi,
        shape: artworkData.shape,
        dimension: artworkData.dimension,

        views: artworkData.views,
        shows: artworkData.shows,
        wishlist: artworkData.wishlist,

        userId: user.id,
      },
    });

    /*
    ============================
    SHEETS
    ============================
    */

    for (const sheetData of artworkData.design.sheets) {
      const front = sheetData.sides.front;

      const sheet = await prisma.sheet.upsert({
        where: {
          id: sheetData.id,
        },

        update: {},

        create: {
          id: sheetData.id,
          background: front.background,

          artworkId: artwork.id,
        },
      });

      /*
      ============================
      ELEMENTS
      ============================
      */

      for (const element of front.elements) {
        await prisma.element.upsert({
          where: {
            id: element.id,
          },

          update: {},

          create: {
            id: element.id,

            label: element.label,

            type: element.type || "",

            image: element.image,
            value: element.value,
            animation: element.animation,

            xAxis: element.xAxis,
            yAxis: element.yAxis,

            size: element.size,

            sheetId: sheet.id,
          },
        });
      }
    }
  }

  console.log("Seed completed");
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
