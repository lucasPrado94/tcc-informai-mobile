import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { styles } from './styles';
import { Coordinate } from '../../interfaces/coordinate';
import { Occurrence } from '../../interfaces/occurrence';
import { OccurrenceDetailsScreenProp } from '../../routes';
import { MapMarker } from '../MapMarker';

type AllOccurrencesMapProps = {
    occurrences: Occurrence[];
}

export function AllOccurrencesMap({ occurrences }: AllOccurrencesMapProps) {
    const navigation = useNavigation<OccurrenceDetailsScreenProp>();

    function handleNavigateToOccurrenceDetails(id: number) {
        navigation.navigate('OccurrenceDetails', { id });
    }

    const [currentLocation, setCurrentLocation] = useState<Coordinate>({
        latitude: 0,
        longitude: 0
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Atenção', 'Esse aplicativo necessita da permissão de acesso à localização do aparelho. Por favor, libere a permissão nas configurações do dispositivo.');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
        })();
    }, []);

    return (
        <View style={styles.container}>
            {(currentLocation.latitude !== 0 && currentLocation.longitude !== 0) &&
                (
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                            latitudeDelta: 0.008,
                            longitudeDelta: 0.008,
                        }}
                    >
                        {occurrences.map(occurrence => {
                            return (
                                <MapMarker
                                    key={occurrence.id}
                                    latitude={occurrence.latitude}
                                    longitude={occurrence.longitude}
                                    calloutAnchor={true}
                                    handleNavigateToOccurrenceDetails={handleNavigateToOccurrenceDetails}
                                    id={occurrence.id}
                                    serviceName={occurrence.service.serviceName}
                                />
                            );
                        })}
                    </MapView>
                )
            }
        </View>
    );
}