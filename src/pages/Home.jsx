import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/index";
// import Skeleton from "./components/PizzaBlock/Skeleton";
// import pizzas from "./assets/pizzas.json";

const Home = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://64cb05e0700d50e3c705626e.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </>
  );
};

export default Home;
