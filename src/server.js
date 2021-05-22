const Hopi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hopi.server({
    port: 5000,
    // host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'IP Public EC2 Instance',
    // and add property scripts in package.json with this two values:
    // "start-prod": "NODE_ENV=production node ./src/server.js",
    // "start-dev": "nodemon ./src/server.js",
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
