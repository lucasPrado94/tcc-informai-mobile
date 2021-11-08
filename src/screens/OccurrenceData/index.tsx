import React from 'react';

import { ScrollView } from 'react-native';
import { ConcludeButton } from '../../components/ConcludeButton';
import { OccurrenceDataForm } from '../../components/OccurrenceDataForm';

import { styles } from './styles';

export function OccurrenceData() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
            <OccurrenceDataForm />
            <ConcludeButton />
        </ScrollView>
    );
}