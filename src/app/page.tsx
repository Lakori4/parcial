"use client"
import CocktailThumb from "@/components/CocktailThumb";
import { getAllCocktails, getRandomCocktailID, searchCocktailsByName } from "@/lib/api";
import { CocktailThumbnail } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";



const Home = () =>  {

  const [cocktails, setCocktails] = useState<CocktailThumbnail[]>([]);
  const [busqueda, setBusqueda] = useState("")
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [search, setSearch]= useState<boolean>(false)


  useEffect(()=>{
    let isMounted = true;

    const fetchCocktails = async () => {
      setLoading(true);
      setError("");

      try {
        const query = busqueda.trim();
        const data = query
          ? await searchCocktailsByName(query)
          : await getAllCocktails();

        if (isMounted) {
          setCocktails(data);
        }
      } catch (e) {
        if (isMounted) {
          setError(e instanceof Error ? e.message : "Error al buscar cócteles.");
          setCocktails([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    const timeout = setTimeout(fetchCocktails, 350);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [search]);

  return (
    <div className="main">

      <h1 className="title">Explorador de cócteles</h1>
      
      <div className="searchContainer">
       <Link href={`/cocktail/`}><button className="searchButton">Dime algo bonito</button></Link>

        <input 
          type="text" 
          placeholder="Buscar un cóctel..." 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          className="searchInput"
        />

        <button className="searchButton" onClick={() => setSearch(!search)}>Buscar</button>
      </div>

      <div className="grid">
        
        {loading ? (
          <p className="loading">Cargando cócteles...</p>
        ) : error ? (
          <p className="error">Error: {error}</p>
        ) : cocktails.length === 0 ? (
          <p className="noResults">No se encontraron resultados.</p>
        ) : (
          cocktails.map((c)=>(
            <CocktailThumb key={c.idDrink} cocktail={c}/>
          ))
        )}
      </div>

    </div>
  );
}

export default Home;