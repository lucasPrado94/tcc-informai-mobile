import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function ToOccurrenceDataButton() {
    const navigation = useNavigation();

    function handleNextStep() {
        navigation.navigate('OccurrenceData');
    }

    return (
        <View style={styles.container}>
            <RectButton style={styles.nextButton} onPress={handleNextStep}>
                <Text style={styles.nextButtonText}>Próximo</Text>
            </RectButton>
        </View>
    );
}