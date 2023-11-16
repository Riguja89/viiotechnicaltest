/**
 * @openapi
 * /api/product/all:
 *   get:
 *     tags:
 *       - Productos:
 *     summary: Trae todos los carritos a un usuario logueado
 *     parameters:
 *       - token:
 *         in: header
 *         name: token
 *         description: Token de autenticacion
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 carts:
 *                   type: array 
 *                   items: 
 *                     type: object
 *                     properties:
 *                       id :
 *                         type: number
 *                       products:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: number
 *                             title:
 *                               type: string
 *                             price:
 *                               type: number
 *                             quantity:
 *                               type: number
 *                             total:
 *                               type: number
 *                             discountPercentage:
 *                               type: number
 *                             discountedPrice:
 *                               type: number
 *                             thumbnail:
 *                               type: string
 *                               description: url de la imagen miniatura
 *       4XX:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string 
 *                   example: "Error encontrado"
 */