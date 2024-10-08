import React, { useState } from 'react';

function Flashcard({ flashcard, isFlipped, setIsFlipped, cardNumber }) {
  const [userInput, setUserInput] = useState(''); // State to hold user input

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value); // Update userInput state on change
  };

  const handleSubmit = () => {
    // Logic to check if the answer is correct
    const isCorrect = userInput.toLowerCase() === flashcard.answer.toLowerCase();
    alert(isCorrect ? 'Correct!' : 'Incorrect, try again!'); // Alert feedback
    setUserInput(''); // Reset input field
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-content">
        <p>Card {cardNumber}</p>
        {isFlipped ? (
          <>
            <p>{flashcard.answer}</p>
            <input type="text" value={userInput} onChange={handleInputChange} placeholder="Enter your guess" />
            <button onClick={handleSubmit}>Submit</button>
          </>
        ) : (
          <p>{flashcard.question}</p>
        )}
      </div>
    </div>
  );
}

export default Flashcard;
