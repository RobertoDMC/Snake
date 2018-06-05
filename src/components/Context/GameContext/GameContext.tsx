import * as React from  'react';

// Custom Component Imports
import { IGame } from '../../domain';

export const game: IGame={
    applePosition: {
        isApple: true,
        isSnake: false,
        x: 0,
        y: 0,
    },
    map: [],
    snake: {
        body: [],
        bodyLength: 4,
        changeDirection: () => ({}),
        consumeApple: () => ({}),
        direction: 'right',
        grow: () => ({}),
        headXPosition: 5,
        headYPosition: 11,
    },
};

export const GameContext = React.createContext(
    game
);