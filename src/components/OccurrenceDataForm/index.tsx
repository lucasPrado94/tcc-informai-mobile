import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Feather } from '@expo/vector-icons';
import { Coordinate } from '../../interfaces/coordinate';
import { Type } from '../../interfaces/type';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import api from '../../services/api';
import { OccurrencesMapScreenProp } from '../../routes';

interface Params {
    position: Coordinate,
}

export function OccurrenceDataForm({ position }: Params) {

    const [name, setName] = useState('');
    const [typeId, setTypeId] = useState(0);
    const [obs, setObs] = useState('');
    const [typesDB, setTypesDB] = useState<Type[]>([]);
    const navigation = useNavigation<OccurrencesMapScreenProp>();

    useEffect(() => {
        (async () => {
            await api.get('types/all').then(response => {
                setTypesDB(response.data);
            });
        })();
    }, []);

    async function handleCreateOccurrence() {
        if (typeId == 0) {
            Alert.alert('Atenção', 'Escolha um tipo para a ocorrência');
        } else {
            const { latitude, longitude } = position;

            const data = new FormData();

            data.append('name', name);
            data.append('typeId', String(typeId));
            data.append('obs', obs);
            data.append('latitude', String(latitude));
            data.append('longitude', String(longitude));

            const result = await api.post('occurrences/create', data);

            if (result.status == 201)
                navigation.navigate('OccurrencesMap');
            else
                Alert.alert('Erro', 'Não foi possível salvar a ocorrência, tente novamente.')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.labelSmall}>Quem está abrindo a ocorrência? Não obrigatório.</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Tipo do problema</Text>
            <Text style={styles.labelSmall}>Selecione a opção que se trata a ocorrência.</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={String(typeId)}
                    onValueChange={(typeValue) => setTypeId(+typeValue)}
                >
                    <Picker.Item label="Escolha uma categoria" value="0" />

                    {
                        typesDB.map(typeDB => {
                            return (
                                <Picker.Item
                                    key={typeDB.id}
                                    label={typeDB.typeName}
                                    value={String(typeDB.id)}
                                />
                            )
                        })
                    }

                </Picker>
            </View>
            {/*
      <Text style={styles.label}>Fotos</Text>
      <Text style={styles.labelSmall}>Adicione fotos do problema para
        que a administração possa saber a situação em que se encontra.</Text>
      <TouchableOpacity style={styles.imagesInput} onPress={() => { }}>
        <Feather name="plus" size={24} color="#009E86" />
      </TouchableOpacity>
      */}

            <Text style={styles.label}>Observações</Text>
            <Text style={styles.labelSmall}>Deseja adicionar mais alguma informação sobre o problema?</Text>
            <TextInput
                style={[styles.input, { height: 110 }]}
                multiline
                value={obs}
                onChangeText={setObs}
            />
            <RectButton style={styles.nextButton} onPress={handleCreateOccurrence}>
                <Text style={styles.nextButtonText}>Concluir</Text>
            </RectButton>
        </View>
    );
}