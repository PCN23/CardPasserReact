import React, { useContext } from 'react';
import { createContext } from 'react';

const GameContext = createContext();


export function GameProvider() {
  return (
    <div>GameProvider</div>
  )
}

export function useGameProvider() {
  return useContext(GameContext);
}
