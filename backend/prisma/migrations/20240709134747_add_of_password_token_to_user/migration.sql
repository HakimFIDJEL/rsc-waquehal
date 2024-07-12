/*
  Warnings:

  - A unique constraint covering the columns `[passwordToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `passwordToken` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_passwordToken_key` ON `User`(`passwordToken`);
