import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { OccurrencesMap } from "./screens/OccurrencesMap";
import { OccurrenceDetails } from "./screens/OccurrenceDetails";
import { SelectMapPosition } from "./screens/SelectMapPosition";
import { OccurrenceData } from "./screens/OccurrenceData";
import { Header } from "./components/Header";

export default function Routes() {
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