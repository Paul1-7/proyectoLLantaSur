const express = require('express')
const fileUpload = require('express-fileupload')
const {
  getAllProducts,
  findProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getDataToReport
} = require('../controllers/productos.controller.js')
const {
  checkId,
  fileTypeCheck,
  fileSizeCheck,
  checkBodyParams
} = require('../middlewares/validator.handle.js')

const productsRoute = express.Router()

productsRoute.get('/', getAllProducts)
productsRoute.get('/reportes/', getDataToReport)
productsRoute.get('/:id', checkId, findProduct)
productsRoute.post(
  '/',
  fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp/img'
  }),
  checkBodyParams('sucursales'),
  fileTypeCheck,
  fileSizeCheck,
  createProduct
)

productsRoute.delete('/:id', checkId, deleteProduct)

productsRoute.put(
  '/:id',
  checkId,
  fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp/img'
  }),
  fileTypeCheck,
  fileSizeCheck,
  updateProduct
)

module.exports = productsRoute
