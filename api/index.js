const server = require('./src/app.js');
//const { conn } = require('./src/db.js');
const { swaggerDocs: V1SwaggerDocs } = require("./src/routes/swagger.js");

require("./src/db.js");
// Syncing all the models at once.
//conn.sync({ force: false }).then(() => {
  server.listen(3001, () => { // cambiar a 3001 para correr en local
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    V1SwaggerDocs(server, 3001);
  });
//});
