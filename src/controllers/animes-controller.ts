import { Request, Response } from "express";
import * as services from "../services/animes-service";

export const getAnimes = async (req: Request, res: Response) => {
  const httpResponse = await services.getAnimeService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getAnimeById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await services.getAnimeByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
