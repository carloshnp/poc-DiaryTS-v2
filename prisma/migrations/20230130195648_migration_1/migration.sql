-- CreateTable
CREATE TABLE "entries" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL,

    CONSTRAINT "entries_pkey" PRIMARY KEY ("id")
);
