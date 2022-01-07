import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { formataDataBR } from '../../helpers/formataData';
import { styles } from './styles';
import markerIcon from '../../images/marker-icon.png';

interface OccurrenceInfoProps {
    service: string,
    name: string,
    createdAt: string,
    obs?: string,
    latitude: number,
    longitude: number
}

export function OccurrenceInfo({ service, name, createdAt, obs, latitude, longitude }: OccurrenceInfoProps) {
    const date = formataDataBR(createdAt);

    function handleOpenGoogleMapRoutes() {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.service}>{service}</Text>
            <Text style={styles.info}>Aberto por: {(name) ? name : 'Anônimo'}.</Text>
            <Text style={styles.info}>Data: {date}.</Text>
            <Text style={styles.info}>Observações: {(obs) ? obs : 'sem observações'}.</Text>
            <Text style={styles.info}>{(obs) ? `Observações: ${obs}` : ''}</Text>

            <View style={styles.mapContainer}>
                <MapView
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }}
                    zoomEnabled={false}
                    pitchEnabled={false}
                    scrollEnabled={false}
                    rotateEnabled={false}
                    style={styles.mapStyle}
                >
                    <Marker
                        icon={markerIcon}
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                    />
                </MapView>
                <TouchableOpacity onPress={handleOpenGoogleMapRoutes} style={styles.routesContainer}>
                    <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}