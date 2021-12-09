import React from 'react';

import { View, ScrollView, Text } from 'react-native';

import { styles } from './styles';

export function OccurrenceDetails() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagesContainer}>
                <ScrollView horizontal pagingEnabled>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                </ScrollView>
            </View>
        </ScrollView>
    );
}