import { Router } from "express";
import * as animesController from "./controllers/animes-controller";

const router = Router();

router.get("/animes", animesController.getAnimes);
router.get("/animes/:id", animesController.getAnimeById);
router.post("/animes", animesController.postAnime);
router.delete("/animes/:id", animesController.deleteAnime);
router.put("/animes/:id", animesController.updateAnime) ;

export default router;