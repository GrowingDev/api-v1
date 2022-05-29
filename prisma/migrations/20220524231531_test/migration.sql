-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `collection` VARCHAR(191) NULL,
    `furniture` VARCHAR(191) NULL,
    `inlay` VARCHAR(191) NULL,
    `etui` VARCHAR(191) NULL,
    `box` VARCHAR(191) NULL,
    `size` VARCHAR(191) NULL,
    `weight` VARCHAR(191) NULL,
    `ean` VARCHAR(191) NULL,
    `price_b2c` VARCHAR(191) NULL,
    `price_b2b` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Calculation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sum_articles` INTEGER NOT NULL,
    `completition` INTEGER NULL,
    `boxing` INTEGER NULL,
    `logistic` INTEGER NULL,
    `license` INTEGER NULL,
    `productId` INTEGER NOT NULL,

    UNIQUE INDEX `Calculation_productId_key`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `front` VARCHAR(191) NULL,
    `back` VARCHAR(191) NULL,
    `etui` VARCHAR(191) NULL,
    `box` VARCHAR(191) NULL,
    `productId` INTEGER NOT NULL,

    UNIQUE INDEX `Images_productId_key`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `article_type` ENUM('STANDARD', 'FEDER', 'BUEGELHALTER', 'HALTEBUEGEL', 'ETUI', 'DESIGN', 'OEFFNER', 'VERPACKUNG', 'DRUCKERZEUGNIS', 'SONSTIGE') NULL DEFAULT 'STANDARD',
    `supplier` VARCHAR(191) NULL,
    `suplier_id` VARCHAR(191) NULL,
    `ean` VARCHAR(191) NULL,
    `price_` INTEGER NULL,
    `marge` INTEGER NULL,
    `tax` INTEGER NULL,
    `productId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArticlesOfProducts` (
    `productId` INTEGER NOT NULL,
    `articleId` INTEGER NOT NULL,

    PRIMARY KEY (`articleId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Calculation` ADD CONSTRAINT `Calculation_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArticlesOfProducts` ADD CONSTRAINT `ArticlesOfProducts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArticlesOfProducts` ADD CONSTRAINT `ArticlesOfProducts_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
