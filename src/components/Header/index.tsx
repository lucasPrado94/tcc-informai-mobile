import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';

type Props = {
    title: string;
    showCancel?: boolean;
}

export function Header({ title, showCancel = true }: Props) {
    const navigation = useNavigation();

    function handleGoBackToAppHomepage() {
        navigation.navigate('OccurrencesMap');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#59CF3B" />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {showCancel ? (
                <BorderlessButton onPress={handleGoBackToAppHomepage}>
                    <Feather name="x" size={24} color="#ff669d" />
                </BorderlessButton>
            ) : (
                <View />
            )}
        </View>
    );
}