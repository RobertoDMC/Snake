import * as React from 'react';

// Material Ui imports
import { withStyles } from '@material-ui/core/styles';

// Custom Component Imports

// NPM imports

// Style imports
import { styles } from './Game.style';

class Game extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    public render () {
        return (
            <div className={this.props.classes.gameContainer}>
                s
            </div> 
        );
    }
}

export default withStyles(styles)(Game);