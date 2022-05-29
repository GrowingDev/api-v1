-- DropForeignKey
ALTER TABLE `BillingAddress` DROP FOREIGN KEY `BillingAddress_entityId_fkey`;

-- DropForeignKey
ALTER TABLE `Contact` DROP FOREIGN KEY `Contact_entityId_fkey`;

-- DropForeignKey
ALTER TABLE `ShippingAddress` DROP FOREIGN KEY `ShippingAddress_entityId_fkey`;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `Contact_entityId_fkey` FOREIGN KEY (`entityId`) REFERENCES `Entity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillingAddress` ADD CONSTRAINT `BillingAddress_entityId_fkey` FOREIGN KEY (`entityId`) REFERENCES `Entity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShippingAddress` ADD CONSTRAINT `ShippingAddress_entityId_fkey` FOREIGN KEY (`entityId`) REFERENCES `Entity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
