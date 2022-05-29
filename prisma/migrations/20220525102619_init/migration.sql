/*
  Warnings:

  - You are about to drop the column `suplier_id` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Article` DROP COLUMN `suplier_id`,
    ADD COLUMN `spuplier_id` VARCHAR(191) NULL;
