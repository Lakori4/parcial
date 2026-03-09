import { CocktailThumbnail } from "@/lib/types"
import Link from "next/link"


type Props ={
  cocktail:CocktailThumbnail
}

const CocktailCard = ({cocktail}: Props) => {


    return (

    <Link href={`/cocktail/${cocktail.idDrink}`} className="card">
      <div className="imageWrapper">
        <img
          src={cocktail.strDrinkThumb}
          className="thumb"
        />
      </div>
      <div className="content">
        <h2 className="title">{cocktail.strDrink}</h2>
      </div>
    </Link>

    )
}

export default CocktailCard