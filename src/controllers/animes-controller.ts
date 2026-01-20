import { Request, response, Response } from "express";
import * as services from "../services/animes-service";
import { noContent } from "../utils/http-helper";

export const getAnimes = async (req: Request, res: Response) => {
  const httpResponse = await services.getAnimeService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getAnimeById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await services.getAnimeByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postAnime = async (req:Request, res:Response) => {
  const bodVlaue = req.body;
  const httpResponse = await services.postAnimeService(bodVlaue);

  if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}

export const deleteAnime = async (req:Request, res:Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await services.deleteAnimeService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updateAnime = async (req:Request, res: Response) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  const httpResponse = await services.updateAnimeService(id, body);
}
