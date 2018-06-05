import * as React from 'react';

// Material Ui imports
import { withStyles } from '@material-ui/core/styles';

// Custom Component Imports
import { game, GameContext } from '../Context';
import { IGame } from '../domain';
import GameMap from './Map';
import Snake from './Snake';

// NPM imports

// Style imports
import { styles } from './Game.style';

const GameContent = (props: any) => {
    return (
        <GameContext.Consumer>
            {({snake, map}) => (
                <div>
                    <Snake snake={snake}/>
                    <GameMap  map={map}/>
                </div>
            )}
        </GameContext.Consumer>
    );
};

class Game extends React.Component<any, IGame> {
    constructor(props: any) {
        super(props);

        // Setting the initial state for the game
        this.changeSnakeDirection = this.changeSnakeDirection.bind(this);
        this.state = game;
    }

    /**
     * Changes the snakes direction base on arrow keycode received
     * @param {number} keyCode keycode of the pressed key 
     */
    public changeSnakeDirection(event: any) {
        const keyCode = event.keyCode;
        let newDirection: 'up' | 'down' | 'left' | 'right' = this.state.snake.direction;
        switch (keyCode) {
            // Left
            case 37:
                newDirection = 'left';
                break;
            // Up 
            case 38:
                newDirection = 'up';
                break;
            // Right
            case 39:
                newDirection = 'right';
                break;
            // Down
            case 40: 
                newDirection = 'down';
                break;
            default:
                break;
        };
        this.setState((state) => ({
            snake: {
                ...state.snake,
                direction: newDirection
            }
        }));
    }

    public consumeApple() {
        this.setState((state) => ({
            applePosition: {
                ...state.applePosition,
                x: this.getRandomInt(19, 19),
                y: this.getRandomInt(19, 19),
            }
        }));
    }
    
    public render () {
        return (
            <div className={this.props.classes.gameContainer} tabIndex={0} onKeyDown={this.changeSnakeDirection}>
                <GameContext.Provider value={this.state}>
                    <GameContent />
                </GameContext.Provider>
            </div> 
        );
    }
    
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    private getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default withStyles(styles)(Game);