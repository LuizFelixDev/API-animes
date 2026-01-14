
import { Request, response, Response } from "express";
import { getAnimeService } from "../services/animes-service";

export const  getAnime = async (req:Request, res:Response) =>{
  const HttpResponse = await getAnimeService()
  res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

