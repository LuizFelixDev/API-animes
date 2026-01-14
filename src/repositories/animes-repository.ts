import { AnimesModel } from "../models/animes-model";

export const dataBase: AnimesModel[] = [
  {
    id: 1,
    title: 'Naruto',
    genre: ['Ação', 'Aventura', 'Shounen'],
    episodes: 220,
    status: 'Finalizado',
    studio: 'Pierrot',
    releaseYear: 2002,
    rating: 8.3
  },
  {
    id: 2,
    title: 'Naruto Shippuden',
    genre: ['Ação', 'Aventura', 'Shounen'],
    episodes: 500,
    status: 'Finalizado',
    studio: 'Pierrot',
    releaseYear: 2007,
    rating: 8.6
  },
  {
    id: 3,
    title: 'One Piece',
    genre: ['Ação', 'Aventura', 'Fantasia'],
    episodes: 1100,
    status: 'Em andamento',
    studio: 'Toei Animation',
    releaseYear: 1999,
    rating: 9.0
  },
  {
    id: 4,
    title: 'Attack on Titan',
    genre: ['Ação', 'Drama', 'Fantasia'],
    episodes: 89,
    status: 'Finalizado',
    studio: 'MAPPA',
    releaseYear: 2013,
    rating: 9.1
  },
  {
    id: 5,
    title: 'Death Note',
    genre: ['Mistério', 'Psicológico', 'Suspense'],
    episodes: 37,
    status: 'Finalizado',
    studio: 'Madhouse',
    releaseYear: 2006,
    rating: 9.0
  }
];


export const findAllAimes = async(): Promise<AnimesModel[]> => {
    return dataBase; 
};

export const findAnimesById = async(
  id: number
): Promise<AnimesModel | undefined> => {
    return dataBase.find((anime) => anime.id ===id);
};