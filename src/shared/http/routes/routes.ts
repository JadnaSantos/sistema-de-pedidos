import { Router } from 'express';
import { CreateCategoryController } from '../../../modules/category/useCases/createCategory/CreateCategoryController';
import { ensureAuthenticateUser } from '../../../middleware/ensureAuthenticateUser';
import { AuthenticateUserController } from '../../../modules/user/useCases/authenticateUser/AuthenticateUserController';
import { ShowUserProfileController } from '../../../modules/user/useCases/showUserProfile/ShowProfileUserController';
import { CreateUserController } from '../../../modules/user/useCases/user/CreateUserController';
import { ListCategoryController } from '../../../modules/category/useCases/listCategory/ListCategoryController';

export const routes = Router()

const createUserController = new CreateUserController()
const showProfileUserController = new ShowUserProfileController()
const authenticateUserController = new AuthenticateUserController()
const createCategoryController = new CreateCategoryController()
const listCategoryControlller = new ListCategoryController()

routes.post('/users/', createUserController.handle)
routes.get('/users/id', ensureAuthenticateUser, showProfileUserController.handle)
routes.post('/sessions', authenticateUserController.handle)
routes.post('/category', ensureAuthenticateUser, createCategoryController.handle)
routes.get('/category', ensureAuthenticateUser, listCategoryControlller.handle)

