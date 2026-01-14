interface AnimesModel{
    id: number;
    name: string;
}

const dataBase: AnimesModel[] = [
  {id: 1, name: "Dragão ball Z"},
  {id: 2, name: "Naruto"},
  {id: 3, name: "Boku no hero"}
];

export const findAllAimes = async(): Promise<AnimesModel[]> => {
    return dataBase; 
};

export const findAnimesById = async(
  id: number
): Promise<AnimesModel | undefined> => {
    return dataBase.find((anime) => anime.id ===id);
};