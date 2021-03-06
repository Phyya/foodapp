import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Rice",
    description: "Fried rice with spicy chicken and plantain fingers",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pounded yam",
    description: "A wrap of the fluffiest pounded yam",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Fish Barbecue",
    description: "Very tasty and saucy catfish for your delight",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Coleslaw",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
