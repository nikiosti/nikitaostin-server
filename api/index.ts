import Koa from 'koa'
import cors from '@koa/cors'

import { koaBody } from 'koa-body'
import serve from 'koa-static'

import dotenv from 'dotenv'

import { order } from './routes/order/router'

dotenv.config()

const app = new Koa()

app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: './uploads',
      keepExtensions: true,
    },
  })
)

app.use(cors({ origin: process.env.CORS_URL, credentials: true }))
app.use(serve('.'))
app.use(order.routes()).use(order.allowedMethods())

app.listen(process.env.PORT, () => {
  console.log(`🚀 http://localhost:${process.env.PORT}`)
})