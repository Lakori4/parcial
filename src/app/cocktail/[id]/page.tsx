"use client"

import Cocktail from "@/components/Cocktail"
import { getCocktailByID, getRandomCocktailID } from "@/lib/api"
import { CocktailDetail } from "@/lib/types"
import { AxiosError } from "axios"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"




const CocktailDetailPage = () => {

    const { id } = useParams();

    const strID = String(id)


    const [cocktail, setCocktail] = useState<CocktailDetail|null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        if (!strID) {
            setLoading(false);
            setError("No se encontró el parámetro en la URL.");
            return;
        }

        getCocktailByID(strID).then((res)=>{
            setCocktail(res);
        }).catch((e:AxiosError)=>{
            setError(e.message)
        }).finally(()=>{
            setLoading(false);
        })
    },[strID]);

    return(
        <div className="main">
            <h1 className="title">Detalle del cóctel: {cocktail?.strDrink}</h1>

            {!cocktail && loading && <h2 className="loading">Loading...</h2>}

            {cocktail && <Cocktail cocktail={cocktail} />}
            {error && <h2 className="error">{error}</h2>}
        </div>
    )

};

export default CocktailDetailPage