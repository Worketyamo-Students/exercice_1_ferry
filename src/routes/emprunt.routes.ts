import { Router } from 'express';

import emprunController from '../controllers/emprunt.controller';

const routeEmprunt = Router()

routeEmprunt.post('/',emprunController.emprunLivre)
routeEmprunt.put('/:id/return',emprunController.retourBook)
routeEmprunt.get('/user/:userID', emprunController.historiqueBook)


export default routeEmprunt