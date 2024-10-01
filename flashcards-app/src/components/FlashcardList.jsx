import React from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards, isFlipped, setIsFlipped, currentIndex }) {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          flashcard={flashcard}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          cardNumber={currentIndex + 1} // Pass the current index + 1 as the card number
        />
      ))}
    </div>
  );
}

export default FlashcardList;
