-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Thing" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "approximate_value" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Thing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Thing" ADD CONSTRAINT "Thing_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
