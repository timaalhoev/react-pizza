import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import NotFoundBlock from "./components/NotFoundBlock";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export const AppContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
