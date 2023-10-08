import Elysia from 'Elysia';
import { UniversityController } from './modules/universities';

export function registerControllers(app: Elysia) {
  app.use(UniversityController); // with database
}

