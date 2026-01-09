import { Request, Response } from "express";

export const getAnime = (req:Request, res:Response) =>{
  res.status(200).json({"anime": "Naruto"})
}