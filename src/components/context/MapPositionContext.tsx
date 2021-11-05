import React, { useState } from 'react';
import { View } from 'react-native';

export const MapPositionContext = React.createContext({});

export const MapPositionProvider = ( props: any ) => {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    return (
        <MapPositionContext.Provider value={{ position, setPosition }}>
            {props.children}
        </MapPositionContext.Provider>
    )
}
