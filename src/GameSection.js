import React from 'react';
import CardList from './CardList';
import { useGameContext } from './GameProvider';
import Player from './Player';


export default function GameSection() {
  const {
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    selectedCard, setSelectedCard,
    setTo, setFrom, deck,
    
  } = useGameContext();
  
  return (
    <div >
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player to={to} player={1} hand={playerOneHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <Player to={to} player={2} hand={playerTwoHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <Player to={to} player={3} hand={playerThreeHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <CardList cards={deck} selectedCard={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} player={'deck'} />
      </section>
    </div>
  );
}
