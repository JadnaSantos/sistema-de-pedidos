import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../../../modules/category/useCases/createCategory/CreateCategoryController';
import { ensureAuthenticateUser } from '../../../middleware/ensureAuthenticateUser';
import { AuthenticateUserController } from '../../../modules/user/useCases/authenticateUser/AuthenticateUserController';
import { ShowUserProfileController } from '../../../modules/user/useCases/showUserProfile/ShowProfileUserController';
import { CreateUserController } from '../../../modules/user/useCases/user/CreateUserController';
import { ListCategoryController } from '../../../modules/category/useCases/listCategory/ListCategoryController';
import { CreateOrderController } from '../../../modules/order/useCases/createOrder/CreateOrderController';
import { DeleteOrderController } from '../../../modules/order/useCases/deleteOrder/DeleteOrderController';
import { AddedOrderItemController } from '../../../modules/order/useCases/addedOrderItem/AddedOrderItemController'
import { DeleteOrderItemController } from '../../../modules/order/useCases/deleteOrderItem/DeleteOrderItemController';
import { SendOrderController } from '../../../modules/order/useCases/sendOrder/SendOrderController';
import { ListOrderController } from '../../../modules/order/useCases/ListOrder/ListOrderController';
import { DetailsOrderController } from '../../../modules/order/useCases/detailsOrder/DetailsOrderController';
import { FinishOrderController } from '../../../modules/order/useCases/finishOrder/FinishOrderController';
import uploadConfig from '../../../config/multer'
import { CreateProductController } from '../../../modules/product/useCases/createProduct/CreateProductController';
import { ListProductController } from '../../../modules/product/useCases/listProduct/ListProductController';

export const routes = Router()

const upload = multer(uploadConfig.upload('./upload'))

const createUserController = new CreateUserController()
const showProfileUserController = new ShowUserProfileController()
const authenticateUserController = new AuthenticateUserController()
const createCategoryController = new CreateCategoryController()
const listCategoryControlller = new ListCategoryController()
const createProductController = new CreateProductController()
const listProductController = new ListProductController()
const createOrderController = new CreateOrderController()
const deleteOrderController = new DeleteOrderController()
const addItemOrderController = new AddedOrderItemController()
const deleteItemOrderController = new DeleteOrderItemController()
const sendOrderController = new SendOrderController()
const listOrdersController = new ListOrderController()
const detailsOrderController = new DetailsOrderController()
const finishOrderController = new FinishOrderController()

routes.post('/users/', createUserController.handle)
routes.get('/users/id', ensureAuthenticateUser, showProfileUserController.handle)
routes.post('/sessions', authenticateUserController.handle)
routes.post('/category', ensureAuthenticateUser, createCategoryController.handle)
routes.get('/category', ensureAuthenticateUser, listCategoryControlller.handle)
routes.post('/product', ensureAuthenticateUser, upload.single('file'), createProductController.handle)
routes.get('/categories/products', ensureAuthenticateUser, listProductController.handle)
routes.post('/order', ensureAuthenticateUser, createOrderController.handle)
routes.delete('/orders', ensureAuthenticateUser, deleteOrderController.handle)
routes.post('/order/add', ensureAuthenticateUser, addItemOrderController.handle)
routes.delete('/order/delete', ensureAuthenticateUser, deleteItemOrderController.handle)
routes.put('/order/send', ensureAuthenticateUser, sendOrderController.handle)
routes.get('/orders', ensureAuthenticateUser, listOrdersController.handle)
routes.get('/orders/details', ensureAuthenticateUser, detailsOrderController.handle)
routes.put('/orders/finish', ensureAuthenticateUser, finishOrderController.handle)



