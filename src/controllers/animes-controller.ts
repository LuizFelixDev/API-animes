
import { Request, Response } from "express";
import { getAnimesService } from "../../services/animes-services";
import { ok } from "../../utils/http-helper";

export const  getAnime = async (req:Request, res:Response) =>{
  const data = getAnimesService();

  const response = await ok(data);

  res.status(response.statusCode).json(response.body);
}

