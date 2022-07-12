import React, { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';


const GameContext = createContext();

const initialCards = [];


export function GameProvider({ children }) {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);


  function passCard(card) {
    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];
  
  // arrays start at zero, but our players start at 1 :shrug:
    const toHand = playerHands[to - 1] || deck;
    const fromHand = playerHands[from - 1] || deck;
  
    const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
    const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;
  
    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);
  
    toHand.push(cardToMove);
  
    toSetFunction([...toHand]);
    fromSetFunction([...fromHand]);
  
    setSelectedCard(null);
  }

  const stateAndSetters = {
    deck, setDeck, 
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo,
    passCard
  };


  return <GameContext.Provider value={stateAndSetters}>
    {children}
  </GameContext.Provider>;
}

export function useGameProvider() {
  return useContext(GameContext);
}
