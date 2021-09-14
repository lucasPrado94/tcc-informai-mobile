import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import markerIcon from './src/images/marker-icon.png';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
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
          coordinate={{
            latitude: -21.3700896,
            longitude: -46.523845,
          }} />
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>0 problemas encontrados</Text>
        <RectButton style={styles.createOccurrenceButton} onPress={() => { }}>
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
  }
});
