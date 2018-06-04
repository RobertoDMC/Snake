// Material UI Imports
import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
    paperAlignment: {
        display: 'flex',
        flexFlow: 'column',
        height: '600px',
        width: '600px',
    },
    playButtonContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 2,
    },
    titleContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 2,
    },
    usernameContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
    },
    welcomeAlignment: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexFlow: 'column',
        height: '100%',
    },
    welcomeContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexFlow: 'row',
        height: '100%',
        justifyContent: 'center',
    },
});