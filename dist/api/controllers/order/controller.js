import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
dotenv.config();
const prisma = new PrismaClient();
export const getOrder = async (ctx) => {
    try {
        const orders = await prisma.order.findMany();
        ctx.body = orders;
        ctx.status = 200;
    }
    catch {
        ctx.status = 500;
    }
};
export const createOrder = async (ctx) => {
    try {
        const ordersBody = ctx.request.body;
        const orders = await prisma.order.create({
            data: { ...ordersBody },
        });
        ctx.body = orders;
        ctx.status = 200;
    }
    catch {
        ctx.status = 500;
    }
};
