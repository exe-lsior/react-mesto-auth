import React from "react";
import likeButton from "../images/like-button.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="element" key={card._id}>
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__main">
        <h2 className="element__main-name">{card.name}</h2>
        <div className="element__main-container">
          <button
            className={`element__main-like ${isLiked && "like_active"}`}
            type="button"
            onClick={handleLikeClick}>
            <img src={likeButton} alt="лайк" />
          </button>
          <span className="element__main-likes">{card.likes.length}</span>
        </div>
      </div>
      {isOwn && (
        <button className="element__delete" onClick={handleCardDelete} />
      )}
    </li>
  );
}

export default Card;
