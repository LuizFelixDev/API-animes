import { Router } from "express";
import * as animesController from "./controllers/animes-controller";

const router = Router();

router.get("/animes", animesController.getAnimes);
router.get("/animes/:id", animesController.getAnimeById);

export default router;