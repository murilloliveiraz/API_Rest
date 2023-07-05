import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir
// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  index => lista os usuarios => GET
  store/create => cria um novo usuario -> POST
  delete => apaga um usuario -> DELETE
  show => mostra um usuario -> GET
  update => atuaçiza um usuario -> PATCH OU PUT
*/
