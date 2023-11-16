/**
 * @openapi
 * /api/user/signup:
 *   post:
 *     tags:
 *       - Registrar Usuario:
 *     summary: Inserta la informacion de un nuevo usuario a la BD
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name :
 *                 type: string
 *               lastname:
 *                 type: string
 *               email :
 *                 type: string
 *                 example: name@mail.com
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: jwt token
 *                 savedUser:
 *                   type: object 
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     lastname:
 *                       type: string
 *                     password:
 *                       type: string
 *                       example: password encripted
 *                     email:
 *                       type: string
 *                       example: name@mail.com
 *                     _v:
 *                       type: number
 *                           
 *       4XX:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string 
 *                   example: "Error encontrado"
 * 
 * /api/user/login:
 *   post:
 *     tags:
 *       - Iniciar sesión Usuario:
 *     summary: Inicia sesión del usuario a ingresar
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email :
 *                 type: string
 *                 example: name@mail.com
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: jwt token
 *                 user:
 *                   type: object 
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     lastname:
 *                       type: string
 *                     password:
 *                       type: string
 *                     email:
 *                       type: string
 *                       example: name@mail.com
 *                     _v:
 *                       type: number
 *                           
 *       4XX:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: null
 *                 message:
 *                   type: string 
 *                   example: "Error encontrado"
 */