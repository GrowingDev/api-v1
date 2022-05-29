/*
  Warnings:

  - You are about to drop the column `price_` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Article` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_productId_fkey`;

-- AlterTable
ALTER TABLE `Article` DROP COLUMN `price_`,
    DROP COLUMN `productId`,
    ADD COLUMN `price` INTEGER NULL;
