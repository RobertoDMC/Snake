import * as React from 'react';

// Material Ui Imports
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

// Interface imports
import { IWelcomeProps, IWelcomeState } from '../domain';

// Npm imports
import { Link } from 'react-router-dom';

// Style imports
import { styles } from './Welcome.style';


// Component to aply link without having to wrap button inside it
const MyLink = (props: any) => <Link to="/game" {...props} />

class Welcome extends React.Component<IWelcomeProps, IWelcomeState> {
    public render() {
        return(
            <div className={this.props.classes.welcomeContainer}>
                <Paper className={this.props.classes.paperAlignment}>
                    <div className={this.props.classes.welcomeContainer}>
                    <div className={this.props.classes.welcomeAlignment}>
                        <div className={this.props.classes.titleContainer}>
                            Snake
                        </div>
                        <div className={this.props.classes.usernameContainer}>
                            Username: 
                        </div>
                        <div className={this.props.classes.playButtonContainer}>
                            <Button 
                                variant={'raised'}
                                component={MyLink}
                            >
                                {'play'}
                            </Button>
                        </div>
                    </div>
                    </div>
                </Paper>
            </div> 
        );
    }
}

export default withStyles(styles)<IWelcomeProps>(Welcome);