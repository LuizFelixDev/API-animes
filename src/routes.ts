import { Router } from "express";
import { getAnime } from "./controllers/animes-controller";

const router = Router();

router.get("/animes", getAnime);

export default router;