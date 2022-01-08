import { Fragment, useEffect, useState } from "react";

// import logo from "./logo.svg";
// import classes from "./App.module.css";
import QuoteItem from "./components/Quotes/QuoteItem";
import FavouriteQuoteList from "./components/Quotes/FavouriteQuotesList";
import Header from "./components/UI/Header";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import { favouriteQuoteActions } from "./store/favouriteQuote-slice";

function App() {
  const [quote, setQuote] = useState("");
  const favouriteQuotes = useSelector((state) => state.favouriteQuote);
  const dispatch = useDispatch();

  const showHome = useSelector((state) => state.ui.homePage);
  // const isClick = useSelector((state) => state.ui.isClick);

  const showFavouriteQuotes = useSelector(
    (state) => state.ui.favouriteQuotesPage
  );

  const fetchQuoteHandler = async () => {
    dispatch(uiActions.setInitialState());
    const response = await fetch("https://api.quotable.io/random");
    console.log(response);

    const responseData = await response.json();
    console.log(responseData);
    console.log(responseData.content);
    console.log(responseData._id);
    setQuote({
      content: responseData.content,
      author: responseData.author,
      id: responseData._id,
    });
  };

  useEffect(() => {
    fetchQuoteHandler();
  }, []);

  useEffect(() => {
    fetch(
      "https://quotes-19e69-default-rtdb.firebaseio.com/favouriteQuotes.json",
      {
        method: "PUT",
        body: JSON.stringify(favouriteQuotes),
      }
    );

    // if (!response.ok) {
    //   throw new Error("Sending data failed");
    // }
  }, [favouriteQuotes]);

  // const fetchFavouriteQuotes = async () => {
  //   const response = await fetch(
  //     "https://quotes-19e69-default-rtdb.firebaseio.com/favouriteQuotes.json"
  //   );

  //   if (!response.ok) {
  //     throw new Error("Sending data failed");
  //   }

  //   const data = await response.json();
  //   console.log(favouriteQuotes);
  //   dispatch(favouriteQuoteActions.replaceFavourite(data));
  // };

  // useEffect(() => {
  //   fetchFavouriteQuotes();
  // }, []);

  return (
    <Fragment>
      <Header onClick={fetchQuoteHandler} />
      {showHome && <QuoteItem onClick={fetchQuoteHandler} quote={quote} />}
      {showFavouriteQuotes && <FavouriteQuoteList />}
    </Fragment>
  );
}

export default App;
