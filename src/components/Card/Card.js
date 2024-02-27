import styles from "./Card.module.scss";
import clsx from "clsx";
import { removeCard, toggleCardFavorite } from "../../redux/cardsRedux";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const dispatch = useDispatch();
  console.log("isFavourite", props.isFavorite);

  const onClick = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          type="button"
          className={clsx(props.isFavorite && styles.isFav)}
          onClick={onClick}
        >
          <i className="fa fa-star-o"></i>
        </button>
        <button type="button" onClick={handleRemoveCard}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
