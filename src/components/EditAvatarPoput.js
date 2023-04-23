import React from "react";
import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleAvatarChange(evt) {
    avatarRef.value = evt.target.value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name={"edit-avatar"}
      title={"Обновить аватар"}
      buttonText={"Сохранить"}
      isLoading={isLoading}
      isLoadingText={"Сохранение"}>
      <input
        ref={avatarRef}
        type="url"
        placeholder="Ссылка на аватар"
        className="popup__input popup__input-avatar"
        id="avatar"
        name="avatar"
        onChange={handleAvatarChange}
        required
      />
      <span className="popup__input-error avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
