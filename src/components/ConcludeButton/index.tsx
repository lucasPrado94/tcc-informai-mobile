import React from 'react';
import { View, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

export function ConcludeButton() {
    return (
        <View style={styles.container}>
            <RectButton style={styles.nextButton} onPress={() => { }}>
                <Text style={styles.nextButtonText}>Concluir</Text>
            </RectButton>
        </View>
    );
}