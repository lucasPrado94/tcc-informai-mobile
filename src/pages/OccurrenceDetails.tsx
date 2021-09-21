import React from "react";
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

export default function OccurrenceDetails() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagesContainer}>
                <ScrollView horizontal pagingEnabled>
                
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imagesContainer: {
        height: 240,
      },
})