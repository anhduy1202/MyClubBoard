import Elysia from "elysia";
import { ClubController } from "./modules/clubs";
import { UniversityController } from "./modules/universities";

export function registerControllers(app: Elysia) {
  app.use(UniversityController);
  app.use(ClubController);
}
