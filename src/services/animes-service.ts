import { noContent } from "../../utils/http-helper";
import { ok } from "../utils/http-helper";

export const getAnimeService = async () => {
  let response = null;
  const data = {Anime: "Drgão ball Z"};

  if(data){
    response = await ok(data);
  }else{
    response = await noContent();
  }
  
  return response;
} 