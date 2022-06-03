-- CreateTable
CREATE TABLE "ProdutoNew" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "ProdutoNew_pkey" PRIMARY KEY ("id")
);
