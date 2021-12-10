import React from 'react';

import { ScrollView } from 'react-native';
import { OccurrenceDataForm } from '../../components/OccurrenceDataForm';
import { Coordinate } from '../../interfaces/coordinate';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';

type OccurrenceDataRouteParams = {
    position: Coordinate,
}

export function OccurrenceData() {
    const route = useRoute();
    const params = route.params as OccurrenceDataRouteParams;

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
            <OccurrenceDataForm position={params.position} />
        </ScrollView>
    );
}