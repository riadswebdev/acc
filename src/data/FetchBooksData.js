import fs from "fs/promises";
import path from "path";

export const fetchAllBooks = async () => {
  try {
    const filePath = path.join(process.cwd(), "public", "allBookData.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {

    return [];
  }
};

export const fetchBooksByCategory = async () => {
  try {
    const filePath = path.join(process.cwd(), "public", "category.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
   
    return [];
  }
};


