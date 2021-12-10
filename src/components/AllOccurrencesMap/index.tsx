import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { styles } from './styles';
import markerIcon from '../../images/marker-icon.png';
import { Coordinate } from '../../interfaces/coordinate';

export function AllOccurrencesMap() {
    const navigation = useNavigation();

    function handleNavigateToOccurrenceDetails() {
        navigation.navigate('OccurrenceDetails');
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
                        <Marker icon={markerIcon}
                            calloutAnchor={{
                                x: 2.7,
                                y: 0.8,
                            }}
                            coordinate={{
                                latitude: -21.3700896,
                                longitude: -46.523845,
                            }}
                        >
                            <Callout tooltip onPress={handleNavigateToOccurrenceDetails}>
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutText}>Problema</Text>
                                </View>
                            </Callout>
                        </Marker>
                    </MapView>
                )
            }
        </View>
    );
}