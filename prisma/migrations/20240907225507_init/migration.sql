-- CreateTable
CREATE TABLE "insurence" (
    "id" SERIAL NOT NULL,
    "policyId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "insurence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "insurence_policyId_key" ON "insurence"("policyId");
