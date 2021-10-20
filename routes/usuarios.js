const{ Router } = require('express')
const router = Router()

const { usuariosGet,
        usuarioDelete,
        usuarioPatch,
        usuarioPost,
        usuarioPut } = require('../controllers/usuarios.js')

router.get('/', usuariosGet)

router.delete('/', usuarioDelete)

router.post('/', usuarioPost)

router.put('/:id', usuarioPut)

router.patch('/', usuarioPatch)

module.exports = router