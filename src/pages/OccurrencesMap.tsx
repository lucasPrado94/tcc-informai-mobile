import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import markerIcon from '../images/marker-icon.png';

export default function OccurrencesMap() {
    const navigation = useNavigation();

    function handleNavigateToOccurrenceDetails() {
        navigation.navigate('OccurrenceDetails');
    }

    function handleNavigateToCreateOrphanage() {
        navigation.navigate('SelectMapPosition');
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE} //seta o provider padrão do mapa para o do google
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

            <View style={styles.footer}>
                <Text style={styles.footerText}>1 problemas encontrados</Text>
                <RectButton style={styles.createOccurrenceButton} onPress={handleNavigateToCreateOrphanage}>
                    <Feather name="plus" size={20} color="#FFF"></Feather>
                </RectButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
    },

    footerText: {
        fontFamily: 'Nunito_700Bold',
        color: '#8fa7b3',
    },

    createOccurrenceButton: {
        width: 56,
        height: 56,
        backgroundColor: '#59CF3B',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },

    calloutText: {
        fontFamily: 'Nunito_700Bold',
        color: '#59CF3B',
        fontSize: 14,
    },
});
