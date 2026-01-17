import { noContent } from "../../utils/http-helper"; 
import { AnimesModel } from "../models/animes-model";
import * as animesRepositories from "../repositories/animes-repository";
import * as httpHelper from "../utils/http-helper";          

export const getAnimeService = async () => {
  
  let response = null;
  const data = await animesRepositories.findAllAimes();

  if(data){
    response = await httpHelper.ok(data);
  }else{
    response = await httpHelper.noContent();
  }
  
  return response;
} 

export const getAnimeByIdService = async (id:number) => {
  const data = await animesRepositories.findAnimesById(id);
  let response = null;


  if(data){
    response = await httpHelper.ok(data);
  }else{
    response = await httpHelper.noContent();
  }
  
  return response;

};

export const postAnimeService = async (anime:AnimesModel) => {
  let response = null;
  if(Object.keys(anime).length !== 0){
    await animesRepositories.insertAnime(anime);
    response = httpHelper.created();
  }else{ 
    response = httpHelper.badRequest(); 
  }

  return response;
}



