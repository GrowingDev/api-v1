/*
  Warnings:

  - You are about to alter the column `marge` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `price` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `total` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `completition` on the `Calculation` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `boxing` on the `Calculation` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `logistic` on the `Calculation` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `license` on the `Calculation` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Article` MODIFY `marge` DOUBLE NULL,
    MODIFY `price` DOUBLE NULL,
    MODIFY `total` DOUBLE NULL;

-- AlterTable
ALTER TABLE `Calculation` MODIFY `completition` DOUBLE NULL,
    MODIFY `boxing` DOUBLE NULL,
    MODIFY `logistic` DOUBLE NULL,
    MODIFY `license` DOUBLE NULL;
