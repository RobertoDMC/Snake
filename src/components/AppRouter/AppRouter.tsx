import * as React from 'react';

// Npm imports
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

// Custom Component imports
import { Game } from '../Game'
import GameOver from '../GameOver/GameOver';
import Welcome from '../Welcome/Welcome';

class AppRouter extends React.Component<any, any> {
    public render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route 
                        exact={true}
                        path={'/'}
                        component={Welcome}
                    />
                    <Route 
                        exact={true}
                        path={'/game'}
                        component={Game}
                    />
                    <Route 
                        exact={true}
                        path={'/game-over'}
                        component={GameOver}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;