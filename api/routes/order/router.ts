import { createOrder, getOrder } from '../../controllers/order/controller.js'
import { api } from '../api'

export const order = api
order.get('/order', getOrder)
order.post('/order', createOrder)
