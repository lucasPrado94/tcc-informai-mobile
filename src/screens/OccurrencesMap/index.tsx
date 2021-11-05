import React from 'react';

import { View } from 'react-native';

import { styles } from './styles';

import { AllOccurrencesMap } from '../../components/AllOccurrencesMap';
import { OccurrencesMapFooter } from '../../components/OccurrencesMapFooter';

export function OccurrencesMap(){
  return (
    <View style={styles.container}>
      <AllOccurrencesMap />
      <OccurrencesMapFooter />
    </View>
  );
}