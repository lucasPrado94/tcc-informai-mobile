import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import markerIcon from '../../images/marker-icon.png';

export function AllOccurrencesMap() {
    const navigation = useNavigation();

    function handleNavigateToOccurrenceDetails() {
        navigation.navigate('OccurrenceDetails');
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -21.3700896,
                    longitude: -46.523845,
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
        </View>
    );
}