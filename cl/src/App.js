import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import palmtree1 from "./assets/palmtree1.svg";

import logo from "./logo.svg";
import "./App.css";

import CategorySelector from "./components/CategorySelector";
import ItemSelector from "./components/ItemSelector";
import ItemCard from "./components/ItemCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  App: {
    color: "#fab687"
  }
}));

const App = () => {
  const classes = useStyles();

  const [test, setTest] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentCategoryParent, setCurrentCategoryParent] = useState("");
  const [currentItemParent, setCurrentItemParent] = useState("");
  const [hasError, setErrors] = useState(false);
  const [categories, setCategories] = useState([
    "Paper",
    "Cardboard",
    "Plastic",
    "Poly-coated beverage cartons",
    "Foam",
    "Glass",
    "Metal",
    "Chemicals/paint",
    "Electronics",
    "Other"
  ]);

  const fetchData = async () => {
    const res = await fetch("/trash");
    res
      .json()
      .then(res => setItems(res))
      .catch(err => setErrors(err));
  };

  const filterItems = () => {
    const filteredItemList = items.filter(
      item => item.category === currentCategoryParent
    );
    filteredItemList.sort((a, b) =>
      a.name > b.name
        ? 1
        : a.name === b.name
        ? a.category > b.category
          ? 1
          : -1
        : -1
    );
    setFilteredItems(filteredItemList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterItems();
  }, [currentCategoryParent]);

  const handleCategoryChange = event => {
    setCurrentCategoryParent(event.target.value);
    setFilteredItems([]);
    setCurrentItemParent("");
  };

  const handleItemChange = event => {
    let itemArr = items.filter(item => item.name === event.target.value);
    let itemObj = itemArr[0];
    setCurrentItemParent(itemObj);
  };

  // const testFunction = () => {
  //   console.log("testFunction reached!");
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* SELECT CATEGORY  */}

        <CategorySelector
          handleCategoryChange={handleCategoryChange}
          categories={categories.sort()}
        />

        {/* SELECT ITEM  */}

        {filteredItems.length > 0 ? (
          <div>
            <ItemSelector
              handleItemChange={handleItemChange}
              filteredItems={filteredItems}
            />
          </div>
        ) : null}

        {/* DISPLAY ITEM INFO  */}

        {currentItemParent ? (
          <ItemCard currentItem={currentItemParent} />
        ) : null}
      </header>
    </div>
  );
};

export default App;

// ABOUT EFFECT HOOK:

// ^ The Effect Hook lets you perform side-effects in function components.
// useEffect is like componentDidMount, componentDidUpdate, and componentWillUnmount combined.
// useEffect accepts a callback as its first argument. Inside the 1st arg, we perform all the effect-related tasks.
// By using this Hook, you tell React that your component needs to do something after render.
// React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
// ABOUT THE OPTIONAL 2ND PARAM (ARRAY): React will check if this item has changed (e.g.  if (prevState.count !== this.state.count) ).
// If it HAS changed, it will re-render. If it has NOT changed, it will NOT re-render.

/* {items && <img src={displayData()} />} */
/* {items && console.log(imageURL)} */
/* {JSON.stringify(items)} */

// const displayData = () => {
//   if (items.length > 0) {
//     return <p>{items[0].image}</p>;
//   }
// };

// #6b03f
// #fab687
