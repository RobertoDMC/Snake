import * as React from  'react';

// Custom Component Imports
import { IGeneral } from '../../domain';

export const general: IGeneral={
    score: 0,
    user: '',
};

export const GeneralContext = React.createContext(
    general
);