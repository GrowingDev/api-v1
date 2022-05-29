/*
  Warnings:

  - You are about to drop the `ArticlesOfProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ArticlesOfProducts` DROP FOREIGN KEY `ArticlesOfProducts_articleId_fkey`;

-- DropForeignKey
ALTER TABLE `ArticlesOfProducts` DROP FOREIGN KEY `ArticlesOfProducts_productId_fkey`;

-- DropTable
DROP TABLE `ArticlesOfProducts`;

-- CreateTable
CREATE TABLE `ProductComponent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `articleId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `amount` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `productId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductComponent` ADD CONSTRAINT `ProductComponent_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
