import { noContent } from "../../utils/http-helper"; 
import * as animesRepositories from "../repositories/animes-repository";
import { ok } from "../utils/http-helper";          

export const getAnimeService = async () => {
  
  let response = null;
  const data = await animesRepositories.findAllAimes();

  if(data){
    response = await ok(data);
  }else{
    response = await noContent();
  }
  
  return response;
} 

export const getAnimeByIdService = async (id:number) => {
  const data = await animesRepositories.findAnimesById(id);
  let response = null;


  if(data){
    response = await ok(data);
  }else{
    response = await noContent();
  }
  
  return response;

}

