import Elysia from 'Elysia';
import cors from '@elysiajs/cors';
import bearer from '@elysiajs/bearer';
import swagger from '@elysiajs/swagger';
import { registerControllers } from './server';
import {
  ErrorMessages,
  requestLogger,
  bootLogger,
} from './utils';
const mysql = require('mysql2')

// Create the connection to the database
export const connection = mysql.createConnection(process.env.DATABASE_URL)

try {
  const app = new Elysia()
    .use(cors())
    .use(swagger())
    .use(bearer())
    .onResponse(requestLogger)
    .onError(({ code, error, set }) => ErrorMessages(code, error, set));
  // user routes and middlewates
  registerControllers(app);
  process.on('SIGINT', app.stop);
  process.on('SIGTERM', app.stop);
  app.listen(process.env.PORT!, bootLogger);
} catch (e) {
  console.log('error booting the server');
  console.error(e);
}