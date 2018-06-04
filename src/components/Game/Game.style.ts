// Material UI Imports
import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
    gameAlignment: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexFlow: 'column',
        height: '100%',
    },
    gameContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexFlow: 'row',
        height: '100%',
        justifyContent: 'center',
    },
});