import React, { useEffect, useState } from 'react';

import { View, ScrollView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
import api from '../../services/api';
import { Occurrence } from '../../interfaces/occurrence';
import { OccurrenceImages } from '../../components/OccurrenceImages';
import { OccurrenceInfo } from '../../components/OccurrenceInfo';

interface OccurrenceDetailsRouteParams {
    id: number;
}

export function OccurrenceDetails() {
    const route = useRoute();
    const { id } = route.params as OccurrenceDetailsRouteParams;
    const [occurrence, setOccurrence] = useState<Occurrence>();

    useEffect(() => {
        api.get(`occurrences/${id}`).then(response => {
            setOccurrence(response.data);
        });
    }, [id]);

    if (!occurrence) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <OccurrenceImages images={occurrence.images} />
            <OccurrenceInfo
                service={occurrence.service.serviceName}
                name={occurrence.name}
                createdAt={occurrence.createdAt}
                obs={occurrence.obs}
                latitude={occurrence.latitude}
                longitude={occurrence.longitude}
            />
        </ScrollView>
    );
}