import React from "react";
import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
  const cardNameRef = useRef();
  const cardLinkRef = useRef();

  useEffect(() => {
    cardNameRef.current.value = "";
    cardLinkRef.current.value = "";
  }, [isOpen]);

  function handleCardNameChange(evt) {
    cardNameRef.value = evt.target.value;
  }

  function handleCardLinkChange(evt) {
    cardLinkRef.value = evt.target.value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddCard({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name={"add-card"}
      title={"Новое место"}
      buttonText={"Сохранить"}
      isLoading={isLoading}
      isLoadingText={"Создание карточки"}>
      <input
        type="text"
        placeholder="Название"
        className="popup__input"
        name="elementTitle"
        onChange={handleCardNameChange}
        ref={cardNameRef}
        minLength={2}
        maxLength={30}
        required
      />
      <span className="popup__input-error name-error"></span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input"
        name="elementLink"
        onChange={handleCardLinkChange}
        ref={cardLinkRef}
        required
      />
      <span className="popup__input-error description-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
