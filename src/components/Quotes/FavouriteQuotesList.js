import FavouriteQuoteItem from "./FavouriteQuoteItem";
import { useSelector } from "react-redux";

const FavouriteQuoteList = (props) => {
  const favouriteQuotes = useSelector(
    (state) => state.favouriteQuote.favouriteQuotes
  );
  console.log(favouriteQuotes);
  return (
    <ul>
      {favouriteQuotes.map((favouriteQuote) => (
        <FavouriteQuoteItem
          key={favouriteQuote.id}
          id={favouriteQuote.id}
          content={favouriteQuote.content}
          author={favouriteQuote.author}
        />
      ))}
    </ul>
    // <p>favourite quotes page</p>
  );
};

export default FavouriteQuoteList;
