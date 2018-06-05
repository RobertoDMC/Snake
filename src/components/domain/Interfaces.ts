import { ICell, ISnake } from './';

export interface IGeneral {
    score: number
    user: string,
};

export interface IGame {
    snake: ISnake;
    map: ICell[];
    applePosition: ICell;
};