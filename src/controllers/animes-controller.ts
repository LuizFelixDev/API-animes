import { json, Request, Response } from "express";
import { getAnimeService} from "../services/animes-service";  
import { StatusCode } from "../utils/http-status-code";

export const getAnime = async (req:Request, res:Response) =>{

  const data = await getAnimeService();
  res.status(StatusCode.OK).json(data);
};