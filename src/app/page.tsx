import Cocktail from "@/components/Cocktail";
import { api, getAllCocktails } from "@/lib/api";
import { CocktailThumbnail } from "@/lib/types";



const Home = async () =>  {

  const cocktails: CocktailThumbnail[] = await getAllCocktails();

  //console.log(cocktails)

  return (
    <div>
      {cocktails.map((e) => <Cocktail cocktail={e} key={e.strDrink}/>)}
    </div>
  )
}

export default Home;