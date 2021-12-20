import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Coordinate } from '../../interfaces/coordinate';
import { OccurrenceDataScreenProp } from '../../routes';

type ToOccurrenceDataButtonProps = {
    position: Coordinate
}

export function ToOccurrenceDataButton({ position }: ToOccurrenceDataButtonProps) {
    const navigation = useNavigation<OccurrenceDataScreenProp>();

    function handleNextStep() {
        navigation.navigate('OccurrenceData', { position });
    }

    return (
        <View style={styles.container}>
            <RectButton style={styles.nextButton} onPress={handleNextStep}>
                <Text style={styles.nextButtonText}>Próximo</Text>
            </RectButton>
        </View>
    );
}