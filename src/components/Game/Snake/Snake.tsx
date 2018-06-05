import * as React from 'react';

// Material Ui imports

// Npm imports

// Custom Components imports
import { ISnake } from '../../domain';

// Style imports

interface ISnakeProps {
    snake: ISnake;
}

class Snake extends React.Component<ISnakeProps, any> {
    constructor(props: ISnakeProps) {
        super(props);
    }

    public shouldComponentUpdate(nextProps: ISnakeProps, nextState: any) {
        return this.props.snake.direction !== nextProps.snake.direction;
    }

    public render() {
        return (
        <div>
            {'snake ' + this.props.snake.direction}  
        </div>
        );
    };
};

export default Snake;