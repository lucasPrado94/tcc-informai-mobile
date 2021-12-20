import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Feather } from '@expo/vector-icons';
import { Coordinate } from '../../interfaces/coordinate';
import { Service } from '../../interfaces/service';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

import { styles } from './styles';
import api from '../../services/api';
import { OccurrencesMapScreenProp } from '../../routes';

interface OccurrenceDataFormParams {
    position: Coordinate,
}

export function OccurrenceDataForm({ position }: OccurrenceDataFormParams) {

    const [name, setName] = useState('');
    const [serviceId, setServiceId] = useState(0);
    const [obs, setObs] = useState('');
    const [servicesDB, setServicesDB] = useState<Service[]>([]);
    const navigation = useNavigation<OccurrencesMapScreenProp>();
    const [images, setImages] = useState<string[]>([]);
    const [extImage, setExtImage] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            await api.get('services/all').then(response => {
                setServicesDB(response.data);
            });
        })();
    }, []);

    async function handleCreateOccurrence() {
        if (serviceId == 0) {
            Alert.alert('Atenção', 'Escolha um serviço público para cadastrar a ocorrência.');
        } else if (images.length == 0) {
            Alert.alert('Atenção', 'Adicione pelo menos uma foto para cadastrar a ocorrência.');
        } else {
            const { latitude, longitude } = position;

            const data = new FormData();

            data.append('name', name);
            data.append('serviceId', String(serviceId));
            data.append('obs', obs);
            data.append('latitude', String(latitude));
            data.append('longitude', String(longitude));

            images.forEach((image, index) => {
                data.append('images', {
                    name: `image_${index}.jpg`,
                    type: 'image/jpg',
                    uri: image,
                } as any)
            })

            const result = await api.post('occurrences/create', data);

            if (result.status == 201)
                navigation.navigate('OccurrencesMap');
            else
                Alert.alert('Erro', 'Não foi possível salvar a ocorrência, tente novamente.')
        }
    }

    async function handleSelectImages() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Precisamos de acesso às suas fotos');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (result.cancelled) {
            return;
        }

        const { uri: image } = result;
        setImages([...images, image]);
    }

    function handleExcludeImage(imageIndex: number) {
        const arrayExtImage = extImage.filter((value, index) => {
            return index !== imageIndex
        });

        const arrayImages = images.filter((value, index) => {
            return index !== imageIndex
        });

        setImages(arrayImages);
        setExtImage(arrayExtImage);
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

            <Text style={styles.label}>Servico público</Text>
            <Text style={styles.labelSmall}>Selecione o serviço público que está acontecendo o problema.</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={String(serviceId)}
                    onValueChange={(serviceValue) => setServiceId(+serviceValue)}
                >
                    <Picker.Item label="Escolha uma categoria" value="0" />

                    {
                        servicesDB.map(serviceDB => {
                            return (
                                <Picker.Item
                                    key={serviceDB.id}
                                    label={serviceDB.serviceName}
                                    value={String(serviceDB.id)}
                                />
                            )
                        })
                    }

                </Picker>
            </View>

            <Text style={styles.label}>Fotos</Text>
            <Text style={styles.labelSmall}>Adicione fotos para
                que a administração possa saber a situação em que o problema se encontra.
            </Text>
            <View style={styles.uploadedImagesContainer}>
                <ScrollView horizontal>
                    {images.map((image, index) => {
                        return (
                            <View
                                key={index}
                                style={styles.uploadedImageMenu}
                            >
                                <Image
                                    source={{ uri: image }}
                                    style={styles.uploadedImage}
                                />
                                <Feather name="x" size={30} color="red" style={styles.excludeImage} onPress={() => handleExcludeImage(index)} />
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
                <Feather name="plus" size={24} color="#009E86" />
            </TouchableOpacity>

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