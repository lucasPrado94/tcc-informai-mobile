import React, { useState } from 'react';

import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';

import { AllOccurrencesMap } from '../../components/AllOccurrencesMap';
import { OccurrencesMapFooter } from '../../components/OccurrencesMapFooter';
import { Occurrence } from '../../interfaces/occurrence';
import api from '../../services/api';

export function OccurrencesMap() {
    const [occurrences, setOccurrences] = useState<Occurrence[]>([]);
    
    useFocusEffect(() => {
        (async () => {
            await api.get('occurrences/all').then(response => {
                setOccurrences(response.data);
            });
        })();

    });

    return (
        <View style={styles.container}>
            <AllOccurrencesMap occurrences={occurrences}/>
            <OccurrencesMapFooter
                totalOccurrences={occurrences.length}
            />
        </View>
    );
}