import Dishes from "../data.json";
import "./Card.css";

function Card() {

  const infoDetail = (key) => {
    alert("You clicked dish ID " + key);
  };
  
  return (
    <div className="card_section">
      {Dishes &&
        Dishes.map((dish) => {
          return (
            <div
              key={dish.id}
              className="container"
              onClick={() => infoDetail(dish.id)}
            >
              <img src={dish.URL} className="image" alt="dish" />
              <div class="overlay">
                {dish.name} ( {dish.category} )<br /> for {dish.price} <br />
                Zutaten: {dish.ingredients}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
