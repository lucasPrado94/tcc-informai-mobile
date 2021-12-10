import React, { useEffect, useState } from "react";
import MapView, { MapEvent, Marker } from 'react-native-maps';
import { View } from 'react-native';
import markerIcon from '../../images/marker-icon.png';
import * as Location from 'expo-location';

import { styles } from './styles';
import { Coordinate } from "../../interfaces/coordinate";


type Props = {
    position: Coordinate,
    handleSelectMapPosition: Function,
}

export function SelectPositionMap({ position, handleSelectMapPosition }: Props) {
    function handleMapEvent(event: MapEvent) {
        handleSelectMapPosition(event.nativeEvent.coordinate);
    }

    const [currentLocation, setCurrentLocation] = useState<Coordinate>({
        latitude: 0,
        longitude: 0
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Você precisa liberar a localização do seu aparelho');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
        })();
    }, [])

    return (
        <View style={styles.container}>
            {(currentLocation.latitude != 0 && currentLocation.longitude != 0) &&
                (
                    <MapView
                        initialRegion={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
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
                )
            }
        </View>
    );
}