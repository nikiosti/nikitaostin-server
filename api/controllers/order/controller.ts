import dotenv from 'dotenv'
import { Order, PrismaClient } from '@prisma/client'
import { Context } from '../../../types/Context'

dotenv.config()

const prisma = new PrismaClient()
export const getOrder = async (ctx: Context) => {
  try {
    const orders = await prisma.order.findMany()
    ctx.body = orders
    ctx.status = 200
  } catch {
    ctx.status = 500
  }
}
export const createOrder = async (ctx: Context) => {
  try {
    const ordersBody = ctx.request.body as Omit<Order, 'id'>

    const orders = await prisma.order.create({
      data: { ...ordersBody },
    })
    ctx.body = orders
    ctx.status = 200
  } catch {
    ctx.status = 500
  }
}
