import Card from "../UI/Card";
// import Heart from "react-animated-heart";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { favouriteQuoteActions } from "../../store/favouriteQuote-slice";

const FavouriteQuoteItem = (props) => {
  const dispatch = useDispatch();
  // const isClick = useSelector((state) => state.ui.isClick);

  const removeQuoteHandler = () => {
    dispatch(favouriteQuoteActions.removeFromFavourite(props.id));
  };
  return (
    <li>
      <Card>
        <p>{props.content}</p>
        <hr></hr>
        <p>{props.author}</p>
        <Button onClick={removeQuoteHandler}>Remove</Button>
      </Card>
    </li>
  );
};

export default FavouriteQuoteItem;
