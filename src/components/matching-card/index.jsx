import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function MatchingGame() {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const animals = ['🐶', '🐱', '🐰', '🐻', '🐼', '🦁', '🐯', '🐨'];

  useEffect(() => {
    const initialCards = shuffleArray([...animals, ...animals]);
    setCards(initialCards);
  }, []);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [index1, index2] = flippedIndices;
      if (cards[index1] === cards[index2]) {
        setMatchedPairs([...matchedPairs, cards[index1]]);
      }
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  }, [flippedIndices, cards, matchedPairs]);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedPairs.includes(cards[index])) {
      return;
    }
    setFlippedIndices([...flippedIndices, index]);
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">Matching Game</h3>
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-3 card-container text-center"
            onClick={() => handleCardClick(index)}
          >
            <div className={`card-inner ${flippedIndices.includes(index) || matchedPairs.includes(card) ? 'flipped' : ''}`}>
              {flippedIndices.includes(index) || matchedPairs.includes(card) ? card : '?'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchingGame;
