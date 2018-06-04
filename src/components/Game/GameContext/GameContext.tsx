import * as React from  'react';

// Custom Component Imports
import { IGame } from '../../domain';

export const game: IGame={
    score: 0,
    user: '',
};

export const GameContext = React.createContext(
    game
);