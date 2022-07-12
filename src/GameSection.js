import React from 'react';
import CardList from './CardList';
import { useGameContext } from './GameProvider';


export default function GameSection() {
  const {
    playerOneEmoji, setPlayerOneEmoji,
    playerTwoEmoji, setPlayerTwoEmoji
  } = useGameContext();
  
  return (
    <div>GameSection</div>
  );
}
