/*
  Warnings:

  - You are about to drop the column `spuplier_id` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Article` DROP COLUMN `spuplier_id`,
    ADD COLUMN `supplier_id` VARCHAR(191) NULL;
