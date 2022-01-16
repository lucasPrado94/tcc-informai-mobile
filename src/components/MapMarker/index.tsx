import React from 'react';

import { View, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { styles } from './styles';
import markerIcon from '../../images/marker-icon.png';

type MapMarkerProps = {
    latitude: number,
    longitude: number,
    calloutAnchor?: boolean,
    handleNavigateToOccurrenceDetails?: (id: any) => void,
    id?: any,
    serviceName?: string
}

export function MapMarker({ latitude, longitude, calloutAnchor, handleNavigateToOccurrenceDetails, id, serviceName }: MapMarkerProps) {
    if (calloutAnchor && handleNavigateToOccurrenceDetails && id && serviceName)
        return (
            <View style={styles.container}>
                <Marker
                    icon={markerIcon}
                    calloutAnchor={{
                        x: 2.8,
                        y: 0.8,
                    }}
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude,
                    }}
                >
                    <Callout tooltip onPress={() => handleNavigateToOccurrenceDetails(id as any)}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>{serviceName}</Text>
                        </View>
                    </Callout>
                </Marker>
            </View>
        );

    else
        return (
            <View style={styles.container}>
                <Marker
                    icon={markerIcon}
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude,
                    }}
                ></Marker>
            </View>
        );
}