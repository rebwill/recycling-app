import React, { useState, useEffect } from "react";

import "../App.css";
import CategorySelector from "../components/CategorySelector";
import ItemSelector from "../components/ItemSelector";
import ItemCard from "../components/ItemCard";
import MainNav from "../components/MainNav";
// import HomePageText from "./components/HomePageText";

import { makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <div className="App">
      {/* <MainNav /> */}
      <header className="selectorContainer">
        {/* Select Category  */}

        <CategorySelector
          handleCategoryChange={handleCategoryChange}
          categories={categories.sort()}
        />

        {/* Select Name */}

        {filteredItems.length > 0 ? (
          <div>
            <ItemSelector
              handleItemChange={handleItemChange}
              filteredItems={filteredItems}
            />
          </div>
        ) : null}

        {/* Display Item Info  */}

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
