import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import EditCard from "./EditCard";
import "./Card.css";
import { GoTrash } from "react-icons/go";

export default function Card({
  currentCard,
  cardNumber,
  deleteCard,
  updateCard,
  setCardSide,
}) {
  const [editCard, setEditCard] = useState(false);

  // toggles card view or card edit mode
  const editToggle = () => {
    setEditCard(!editCard);
  };

  return (
    <div className="card-section">
      {editCard === false ? (
        <div className="small-card">
          <div className="small-card-buttons">
            <GrEdit className="edit-button" onClick={editToggle} />
            <GoTrash
              className="delete-button"
              onClick={() => {
                setCardSide("front");
                deleteCard(currentCard);
              }}
            />
          </div>
          <p>{currentCard.front}</p>
        </div>
      ) : (
        <EditCard
          currentCard={currentCard}
          setEditCard={setEditCard}
          updateCard={updateCard}
          cardNumber={cardNumber}
        />
      )}
    </div>
  );
}
