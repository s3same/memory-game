import { useState, useEffect } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
import Helmet from './assets/images/helmet.png';
import Potion from './assets/images/potion.png';
import Ring from './assets/images/ring.png';
import Scroll from './assets/images/scroll.png';
import Shield from './assets/images/shield.png';
import Sword from './assets/images/sword.png';

const cardImages = [
  { src: Helmet, matched: false },
  { src: Potion, matched: false },
  { src: Ring, matched: false },
  { src: Scroll, matched: false },
  { src: Shield, matched: false },
  { src: Sword, matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle cards for new game
  const durstenfeldShuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
      [a[i], a[j]] = [a[j], a[i]];
      // let temp = a[i];
      // a[i] = a[j];
      // a[j] = temp;
    }
    return a;
  };

  const shuffleCards = () => {
    // const shuffledCards = [...cardImages, ...cardImages]
    //   .sort(() => Math.random() - 0.5)
    //   .map(card => ({ ...card, id: Math.random() }));

    let shuffledCards = durstenfeldShuffle([...cardImages, ...cardImages]).map((card) => ({
      ...card,
      id: Math.random(),
    }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <p>Turns: {turns}</p>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
