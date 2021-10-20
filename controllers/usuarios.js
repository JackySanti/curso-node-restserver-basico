const { response, request} = require("express");

const usuariosGet = (req = request, res = response) => {

  const { q, name, apikey} = req.query

  res.json({
    msg: 'get API - controlador',
    q,
    name,
    apikey
  })
}

const usuarioDelete = (req, res = response) =>{
  res.json({
    msg: 'delete API - controlador'
  })
}

const usuarioPatch = (req, res) => {
  res.json({
    msg: 'patch API - controlador'
  })
}

const usuarioPost = (req, res) => {
  res.json({
    ok: true,
    msg: 'post API'
  })
}

const usuarioPut = (req, res) => {

  const id = req.params.id

  res.json({
    ok: true,
    msg: `put API - controlador - id: ${id}`
  })
}

module.exports = {
  usuariosGet,
  usuarioDelete,
  usuarioPatch,
  usuarioPost,
  usuarioPut
}