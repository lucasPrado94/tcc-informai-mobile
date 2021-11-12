import React, { useState } from "react";
import { View } from 'react-native';

import { styles } from './styles';

import { SelectPositionMap } from '../../components/SelectPositionMap';
import { ToOccurrenceDataButton } from '../../components/ToOccurrenceDataButton'
import { MapEvent } from "react-native-maps";

type Coordinate = {
  latitude: number,
  longitude: number
}

export function SelectMapPosition() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const handleSelectedPosition = (coorditate: Coordinate) => {
    setPosition(coorditate);
  }

  return (
    <View style={styles.container}>
      <SelectPositionMap position={position} handleSelectMapPosition={handleSelectedPosition} />

      {position.latitude !== 0 && (
        <ToOccurrenceDataButton position={position}/>
      )}
    </View>
  );
}