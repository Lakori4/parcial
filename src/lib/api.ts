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
        const response = (await api.get<Drinks>("search.php?f=a")).data;
        return response.drinks;
    } catch (error) {
        console.error("Error getting all cocktails:", error);
        return [];
    }
};

export const searchCocktailsByName = async (name: string): Promise<CocktailThumbnail[]> => {
    try {
        const encodedName = encodeURIComponent(name);
        const response = await api.get<CocktailThumbnail[]>(`search.php?s=${name}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        }

        console.error(`Error searching cocktails by name (${name}):`, error);
        return [];
    }
};

export const getCocktailByID = async (id: string): Promise<CocktailDetail | null> => {
    try {
        const response = (await api.get<Drink>(`lookup.php?i=${id}`)).data;
        return response.drinks[0] || null;
    } catch (error) {
        console.error(`Error getting cocktail details ${id}:`, error);
        return null;
    }
};

export const getRandomCocktailID = async () : Promise<string | null> => {

    try {
        const response = (await api.get<Drinks>(`random.php`)).data;
        console.log(response.drinks[0].idDrink)
        return response.drinks[0].idDrink || null
    } catch (error) {
        console.error(`Error getting random cocktail details`, error);
        return null;
    }
}