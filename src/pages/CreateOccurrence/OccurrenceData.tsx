import React from "react";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import { Feather } from '@expo/vector-icons';

export default function OccurrenceData() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
            <Text style={styles.title}>Dados da Ocorrência</Text>

            <Text style={styles.label}>Nome</Text>
            <Text style={styles.labelSmall}>Quem está abrindo a ocorrência? Não obrigatório.</Text>
            <TextInput
                style={styles.input}
            />

            <Text style={styles.label}>Tipo do problema</Text>
            <Text style={styles.labelSmall}>Selecione a opção que se trata a ocorrência.</Text>
            <View style={styles.pickerContainer}>
                <Picker>
                    <Picker.Item label="Água e esgoto" value="1" />
                    <Picker.Item label="Coleta de lixo e limpeza de vias" value="2" />
                    <Picker.Item label="Drenagem de água da chuva" value="3" />
                    <Picker.Item label="Pavimentação" value="4" />
                    <Picker.Item label="Trânsito e tráfego" value="5" />
                    <Picker.Item label="Transporte Coletivo" value="6" />
                    <Picker.Item label="Iluminação pública" value="7" />
                    <Picker.Item label="Energia elétrica" value="8" />
                    <Picker.Item label="Serviços telefênicos" value="9" />
                    <Picker.Item label="Distribuição de gás" value="10" />
                    <Picker.Item label="Educação e ensino" value="11" />
                    <Picker.Item label="Saúde e higiene" value="12" />
                    <Picker.Item label="Assistência social" value="13" />
                    <Picker.Item label="Mercados, feiras e matadouros" value="14" />
                    <Picker.Item label="Serviço funerário" value="15" />
                    <Picker.Item label="Segurança pública" value="16" />
                    <Picker.Item label="Esportes, lazer, cultura e recreação" value="17" />
                    <Picker.Item label="Defesa civil" value="18" />
                </Picker>
            </View>

            <Text style={styles.label}>Fotos</Text>
            <Text style={styles.labelSmall}>Adicione fotos da ocorrência para
                que a administração possa saber a situação em que se encontra o problema.</Text>
            <TouchableOpacity style={styles.imagesInput} onPress={() => { }}>
                <Feather name="plus" size={24} color="#009E86" />
            </TouchableOpacity>

            <Text style={styles.label}>Observações</Text>
            <Text style={styles.labelSmall}>Deseja adicionar mais alguma informação sobre o problema?</Text>
            <TextInput
                style={[styles.input, { height: 110 }]}
                multiline
            />

            <RectButton style={styles.nextButton} onPress={() => { }}>
                <Text style={styles.nextButtonText}>Concluir</Text>
            </RectButton>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        color: '#009E86',
        fontSize: 32,
        fontFamily: 'Nunito_700Bold',
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6'
    },

    label: {
        color: '#009E86',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 24,
        marginBottom: 8,
    },

    labelSmall: {
        color: '#009E86',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 12,
        marginBottom: 8,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#009E86',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    imagesInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderStyle: 'dashed',
        borderColor: '#009E86',
        borderWidth: 1.4,
        borderRadius: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },

    pickerContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1.4,
        borderColor: '#009E86',
        borderRadius: 20,
        paddingVertical: 2,
        paddingHorizontal: 2,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    nextButton: {
        backgroundColor: '#009E86',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 32,
    },

    nextButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: '#FFF',
    }
})