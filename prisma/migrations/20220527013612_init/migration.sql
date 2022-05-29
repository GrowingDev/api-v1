-- DropForeignKey
ALTER TABLE `ProductComponent` DROP FOREIGN KEY `ProductComponent_productId_fkey`;

-- AddForeignKey
ALTER TABLE `ProductComponent` ADD CONSTRAINT `ProductComponent_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
