import React from "react";

import { OccurrencesMap } from "./screens/OccurrencesMap";
import { OccurrenceDetails } from "./screens/OccurrenceDetails";
import { SelectMapPosition } from "./screens/SelectMapPosition";
import { OccurrenceData } from "./screens/OccurrenceData";
import { Header } from "./components/Header";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Coordinate } from "./interfaces/coordinate";

export type RootStackParamList = {
    OccurrencesMap: undefined;
    OccurrenceDetails: undefined;
    SelectMapPosition: undefined;
    OccurrenceData: { position: Coordinate };
};
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

//exporting types for each screen's props
export type OccurrencesMapScreenProp = NativeStackNavigationProp<RootStackParamList, 'OccurrencesMap'>;
export type OccurrenceDetailsScreenProp = NativeStackNavigationProp<RootStackParamList, 'OccurrenceDetails'>;
export type SelectMapPositionScreenProp = NativeStackNavigationProp<RootStackParamList, 'SelectMapPosition'>;
export type OccurrenceDataScreenProp = NativeStackNavigationProp<RootStackParamList, 'OccurrenceData'>;

//exporting route component
export function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name="OccurrencesMap"
                    component={OccurrencesMap}
                />

                <Screen
                    name="OccurrenceDetails"
                    component={OccurrenceDetails}
                />

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione o local no mapa" />
                    }}
                />

                <Screen
                    name="OccurrenceData"
                    component={OccurrenceData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}