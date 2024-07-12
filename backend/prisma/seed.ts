import { PrismaClient } from "@prisma/client";
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { UserService } from "src/user/user.service";

const prisma = new PrismaClient();

async function main() {

    const app = await NestFactory.create(AppModule);
    const userService = app.get(UserService);

    await userService.create({
        email: "hakimfidjel.spam@gmail.com",
        password: "password",
        name: "Hakim Fidjel",
        createdAt: new Date(),
        updatedAt: new Date(),
        passwordToken: null,
    });

    await app.close();
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect();
    })