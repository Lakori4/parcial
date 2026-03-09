import { CocktailDetail } from "@/lib/types"

type Props ={
  cocktail:CocktailDetail
}

const Cocktail = ({cocktail}: Props) => {


    return(
        <div className="countryDetail">
        <img
          src={cocktail.strDrinkThumb}
          className="detailImg"
        />
        <div className="detailBody">
          <p className="detailOfficial">Nombre: {cocktail.strDrink}</p>
          <p className="detailRow">Categoría: {cocktail.strCategory}</p>
          <p className="detailRow">Alcohólica: {cocktail.strAlcoholic === "Alcoholic" ? "Sí" : "No"}</p>
          <p className="detailRow">Tipo de vaso: {cocktail.strGlass}</p>
          <p className="detailRow">Instrucciones: {cocktail.strInstructions}</p>
          <div className="detailRow">
            <span className="detailLabel">Ingredientes:</span>
            <ol className="detailInstructions">
              {cocktail.strIngredient1 ? <li>{cocktail.strIngredient1}</li> : null}
              {cocktail.strIngredient2 ? <li>{cocktail.strIngredient2}</li> : null}
              {cocktail.strIngredient3 ? <li>{cocktail.strIngredient3}</li> : null}
              {cocktail.strIngredient4 ? <li>{cocktail.strIngredient4}</li> : null}
              {cocktail.strIngredient5 ? <li>{cocktail.strIngredient5}</li> : null}
              {cocktail.strIngredient6 ? <li>{cocktail.strIngredient6}</li> : null}
              {cocktail.strIngredient7 ? <li>{cocktail.strIngredient7}</li> : null}
              {cocktail.strIngredient8 ? <li>{cocktail.strIngredient8}</li> : null}
              {cocktail.strIngredient9 ? <li>{cocktail.strIngredient9}</li> : null}
              {cocktail.strIngredient10 ? <li>{cocktail.strIngredient10}</li> : null}
              {cocktail.strIngredient11 ? <li>{cocktail.strIngredient11}</li> : null}
              {cocktail.strIngredient12 ? <li>{cocktail.strIngredient12}</li> : null}
              {cocktail.strIngredient13 ? <li>{cocktail.strIngredient13}</li> : null}
              {cocktail.strIngredient14 ? <li>{cocktail.strIngredient14}</li> : null}
              {cocktail.strIngredient15 ? <li>{cocktail.strIngredient15}</li> : null}
            </ol>
          </div>
        </div> 
      </div>
    )
}

export default Cocktail