import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import FlashcardList from './components/FlashcardList';

function App() {
  // State to hold flashcards
  const [flashcards, setFlashcards] = useState([
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
    { question: 'What is the chemical symbol for gold?', answer: 'Au' },
    { question: 'What is the highest mountain in the solar system?', answer: 'Olympus Mons' },
    { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
    { question: 'Who is the main character in the book "To Kill a Mockingbird" ?', answer: 'Scout Finch' },
    { question: 'What is the largest living species of lizard?', answer: 'Komodo dragon' },
    { question: 'What is the deepest part of the ocean?', answer: 'Challenger Deep' },
    { question: 'What is the highest recorded temperature on Earth?', answer: '134°F' },
  ]);

  // State to track the current flashcard index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to track if the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // State to track if the quiz has started
  const [isStarted, setIsStarted] = useState(false);

  // State to track if the quiz is finished
  const [isFinished, setIsFinished] = useState(false);

  // Function to show a random flashcard
  const showRandomCard = () => {
    if (flashcards.length === 0) {
      setIsFinished(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false); // Reset the flip state
  };

  // Function to start the quiz
  const startQuiz = () => {
    setIsStarted(true);
    setIsFlipped(false); // Ensure the quiz starts with the question
    setIsFinished(false); // Reset the finished state
  };

  // Function to go back to the start screen
  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(flashcards.length - 1);
    }
    setIsFlipped(false); // Reset the flip state
  };

  // Function to restart the quiz
  const restartQuiz = () => {
    setIsStarted(false);
    setIsFinished(false);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="App">
      {!isStarted ? (
        <div className="start-screen">
          <h1>Flashcards App</h1>
          <p>Learn something new with our flashcards!</p>
          <p>Total Cards: {flashcards.length}</p>
          <button onClick={startQuiz}>Start</button>
        </div>
      ) : isFinished ? (
        <div className="finish-screen">
          <h1>Quiz Finished!</h1>
          <p>You've gone through all the flashcards.</p>
          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <div className="quiz-screen">
          <FlashcardList
            flashcards={[flashcards[currentIndex]]}
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
            currentIndex={currentIndex} // Pass the current index to FlashcardList
          />
          <div className="button-group">
            <button onClick={showRandomCard}>Next</button>
            <button onClick={goBack}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;