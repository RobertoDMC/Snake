export interface ISnake {
    headXPosition: number;
    headYPosition: number;
    bodyLength: number;
    body: ICell[];
    direction: 'up' | 'down' | 'left' | 'right';
    changeDirection: () => {},
    grow: () => {},
    consumeApple: () => {},
};

export interface ICell {
    x: number;
    y: number;
    isApple: boolean;
    isSnake: boolean;
}