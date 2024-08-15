/*
  Warnings:

  - You are about to drop the column `team_Id` on the `match` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[passwordToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Activity_categoryId_fkey` ON `activity`;

-- DropIndex
DROP INDEX `ActivityImage_activityId_fkey` ON `activityimage`;

-- DropIndex
DROP INDEX `Match_team_Id_fkey` ON `match`;

-- DropIndex
DROP INDEX `MatchPlayer_teamId_fkey` ON `matchplayer`;

-- DropIndex
DROP INDEX `MatchTeam_categoryId_fkey` ON `matchteam`;

-- DropIndex
DROP INDEX `NewsImage_newsId_fkey` ON `newsimage`;

-- AlterTable
ALTER TABLE `match` DROP COLUMN `team_Id`,
    ADD COLUMN `categoryId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_passwordToken_key` ON `User`(`passwordToken`);

-- AddForeignKey
ALTER TABLE `NewsImage` ADD CONSTRAINT `NewsImage_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `MatchCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchTeam` ADD CONSTRAINT `MatchTeam_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `MatchCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchPlayer` ADD CONSTRAINT `MatchPlayer_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `MatchTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `ActivityCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActivityImage` ADD CONSTRAINT `ActivityImage_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
