import * as React from 'react';

// Material Ui imports

// Npm imports

// Custom Components imports
import { ICell } from '../../domain';

// Style imports


interface IGameMapProps {
    map: ICell[];
}

class GameMap extends React.Component<IGameMapProps, any> {

    constructor(props: IGameMapProps) {
        super (props);
    }

    public render() {
        return(
            <div>
                Map
            </div>
        );
    }

};

export default GameMap;