import React from 'react';

function Flashcard({ flashcard, isFlipped, setIsFlipped, cardNumber }) {
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-content">
        <p>Card {cardNumber}</p>
        <p>{isFlipped ? flashcard.answer : flashcard.question}</p>
      </div>
    </div>
  );
}

export default Flashcard;
