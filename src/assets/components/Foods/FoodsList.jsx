import React from "react";
const FoodsList =() => {
const FoodsList = [
    {
    title:"Greek Salad with Lettuce",
    ingredients: ["Vegetables", "Romaine Lettuce", "Feta Cheese"],
    price: 8,
    
    }
]
  const listOfFoods = FoodsList.map((food) => <FoodsItem singleFood={food}/>)
  return <ul>{listOfFoods}</ul>
};

export default FoodsList;
  
  