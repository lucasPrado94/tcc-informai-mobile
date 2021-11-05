import React, { useContext, useState } from "react";
import MapView, { MapEvent, Marker } from 'react-native-maps';
import { View } from 'react-native';
import markerIcon from '../../images/marker-icon.png';

import { styles } from './styles';


type Props = {
    position: {
        latitude: number,
        longitude: number,
    },
    handleSelectMapPosition: Function,
}

export function SelectPositionMap({ position, handleSelectMapPosition }: Props) {

    function handleMapEvent(event: MapEvent) {
        handleSelectMapPosition(event.nativeEvent.coordinate);
    }
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: -21.366905,
                    longitude: -46.517377,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                onPress={handleMapEvent}
                style={styles.mapStyle}
            >
                {position.latitude !== 0 && (
                    <Marker
                        icon={markerIcon}
                        coordinate={{ latitude: position.latitude, longitude: position.longitude }}
                    />
                )}
            </MapView>
        </View>
    );
}