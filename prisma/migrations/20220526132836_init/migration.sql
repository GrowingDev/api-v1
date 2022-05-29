/*
  Warnings:

  - You are about to drop the column `tax` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `printId` on the `Print` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Article` DROP COLUMN `tax`,
    ADD COLUMN `total` INTEGER NULL;

-- AlterTable
ALTER TABLE `Print` DROP COLUMN `printId`;
