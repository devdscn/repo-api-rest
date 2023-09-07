import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// não deve existir numa aplicação real

// router.get('/', userController.index); // Lista usuários

// router.get('/:id', userController.show); // Listta usuário

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index => lista todos os usarios; GET
store/create =>  cria um novo registro; POST
delete => apaga um registro; DELETE
show => mostra um regsitro; GET
update => atualizad um registro; PATCH ou PUT
*/
