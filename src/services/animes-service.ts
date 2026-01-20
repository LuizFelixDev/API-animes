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


export const deleteAnimeService = async (id:number) => {
  let response = null;
  const isDeleted = await animesRepositories.deleteAnime(id)

  if (isDeleted){
    response = httpHelper.ok({mensage: "Anime deleted successfully"});
  }else{
    response = await httpHelper.badRequest();
  } 

  return response;
};

export const updateAnimeService = async (id:number, body: AnimesModel) => {
  const data = await animesRepositories.findAndModifyAnime(id, body);
  const response = await httpHelper.ok(data); 
  return response;
}
