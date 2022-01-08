// import { useState } from "react";
// import { useEffect } from "react";
import Card from "../UI/Card";

import classes from "./QuoteItem.module.css";
import Button from "../UI/Button";
import Heart from "react-animated-heart";
import { useDispatch, useSelector } from "react-redux";
import { favouriteQuoteActions } from "../../store/favouriteQuote-slice";
import { uiActions } from "../../store/ui-slice";

const QuoteItem = (props) => {
  const isClick = useSelector((state) => state.ui.isClick);
  const dispatch = useDispatch();
  // const [isClick, setClick] = useState(false);

  const addTofavouriteHandler = () => {
    dispatch(uiActions.toggleClick());
    console.log(isClick);
    // setClick(!isClick);
    if (!isClick) {
      dispatch(
        favouriteQuoteActions.addToFavourite({
          id: props.quote.id,
          content: props.quote.content,
          author: props.quote.author,
        })
      );
    } else {
      dispatch(favouriteQuoteActions.removeFromFavourite(props.quote.id));
    }

    console.log(isClick);
  };

  return (
    <Card className={classes.quote}>
      <p>{props.quote.content}</p>
      <hr></hr>
      <p>{props.quote.author}</p>
      <Button onClick={props.onClick}>New Quote</Button>
      <div>
        <Heart
          isClick={isClick}
          onClick={addTofavouriteHandler}
          // onClick={() => {
          //   setClick(!isClick);
          // }}
        />
      </div>
    </Card>
  );
};

export default QuoteItem;
