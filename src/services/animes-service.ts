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