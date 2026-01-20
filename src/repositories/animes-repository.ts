import { AnimesModel } from "../models/animes-model";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(__dirname, "../data/animes.json");

const readData = async (): Promise<AnimesModel[]> => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

const writeData = async (data: AnimesModel[]): Promise<void> => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
};

export const findAllAimes = async (): Promise<AnimesModel[]> => {
  return await readData();
};

export const findAnimesById = async (id: number): Promise<AnimesModel | undefined> => {
  const data = await readData();
  return data.find((anime) => anime.id === id);
};

export const insertAnime = async (anime: AnimesModel) => {
  const data = await readData();
  data.push(anime);
  await writeData(data);
};

export const deleteAnime = async (id: number) => {
  const data = await readData();
  const index = data.findIndex((a) => a.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    await writeData(data);
    return true;
  }
  return false;
};

export const findAndModifyAnime = async (id: number, body: AnimesModel) => {
  const data = await readData();
  const index = data.findIndex((p) => p.id === id);

  if (index !== -1) {
    data[index] = { ...data[index], ...body };
    await writeData(data);
    return data[index];
  }
  return undefined;
};