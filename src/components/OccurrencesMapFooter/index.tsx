import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

type Props = {
    totalOccurrences: number
}
export function OccurrencesMapFooter({ totalOccurrences }: Props) {
    const navigation = useNavigation();

    function handleNavigateToCreateOccurrence() {
        navigation.navigate('SelectMapPosition');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>
                {totalOccurrences} ocorrências encontradas
            </Text>
            <RectButton
                style={styles.createOccurrenceButton}
                onPress={handleNavigateToCreateOccurrence}
            >
                <Feather name="plus" size={20} color="#FFF" />
            </RectButton>
        </View>
    );
}