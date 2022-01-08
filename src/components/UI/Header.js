import Button from "./Button";
import { uiActions } from "../../store/ui-slice";

import { useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  // const homeHandler = () => {
  //   dispatch(uiActions.showHomePage());
  // };
  const favouriteQuotesPageHandler = () => {
    dispatch(uiActions.showFavouriteQuotesPage());
  };
  return (
    <div>
      <Button onClick={props.onClick}>Home</Button>
      <Button onClick={favouriteQuotesPageHandler}>Favourite Qoutes</Button>
    </div>
  );
};

export default Header;
