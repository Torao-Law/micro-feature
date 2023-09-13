import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Word() {
  const words = ['apple', 'banana', 'cherry', 'grape', 'orange', 'Avocado', 'Guava', 'Strawberry', 'Pineapple'];
  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [inputWord, setInputWord] = useState('');
  const [score, setScore] = useState(0);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const scrambleWord = (word) => {
    const wordArray = word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join('');
  };

  const checkAnswer = () => {
    if (inputWord.toLowerCase() === currentWord.toLowerCase()) {
      setScore(score + 1);
      setCurrentWord(getRandomWord());
      setInputWord('');
    } else {
      alert('Jawaban salah, coba lagi.');
    }
  };

  useEffect(() => {
    setCurrentWord(getRandomWord());
  }, []);

  useEffect(() => {
    setScrambledWord(scrambleWord(currentWord));
  }, [currentWord]);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Word Scramble</h3>
      <div className="row">
        <div className="col-md-6">
          <p>Skor: {score}</p>
          <h2>Kata yang diacak:</h2>
          <p>{scrambledWord}</p>
          <input
            type="text"
            className="form-control"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={checkAnswer}>Cek Jawaban</button>
        </div>
      </div>
    </div>
  );
}

