import axios from "axios";
import { CocktailDetail, CocktailThumbnail } from "./types";



export const api = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
    timeout: 5000,
})

type Drinks = {
    drinks : CocktailThumbnail[]
}

type Drink = {
    drinks : CocktailDetail[]
}
export const getAllCocktails = async (): Promise<CocktailThumbnail[]> => {
    try {
        const response = (await api.get<Drinks>("search.php?s=margarita")).data;
        return response.drinks;
    } catch (error) {
        console.error("Error getting all cocktails:", error);
        return [];
    }
};

export const getCocktailByID = async (id: string): Promise<CocktailDetail | null> => {
    try {
        const response = (await api.get<Drink>(`lookup.php?i=${id}`)).data;
        return response.drinks[0] || null;
    } catch (error) {
        console.error(`Error getting cocktail detail ${id}:`, error);
        return null;
    }
};