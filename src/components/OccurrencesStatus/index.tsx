import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { View, Text } from 'react-native';

import { styles } from './styles';
import { statusAberta, statusEmAndamento, statusFinalizada } from '../../enums/status';

interface OccurrenceStatusProps {
    status: number
}

interface statusRenderProps {
    color: string,
    backgroundColor: string,
    title: string,
    featherIcon: 'alert-circle' | 'clock' | 'check-circle',
    message: string,
}

export function OccurrencesStatus({ status }: OccurrenceStatusProps) {
    const [statusProps, setStatusProps] = useState<statusRenderProps>();

    useEffect(() => {
        if (status == statusAberta) {
            setStatusProps({
                color: '#d12a2a',
                backgroundColor: '#f0b0b0',
                title: 'Aberta',
                message: 'A administração ainda nao iniciou a resolução dessa ocorrência. Por favor, verifique o status novamente mais tarde.',
                featherIcon: 'alert-circle'
            });
        } else if (status == statusEmAndamento) {
            setStatusProps({
                color: '#D29803',
                backgroundColor: '#faf896',
                title: 'Em andamento',
                message: 'A administração está cuidando dessa ocorrência. Continue acompanhando o status até que ela seja finalizada.',
                featherIcon: 'clock'
            });
        } else if (status == statusFinalizada) {
            setStatusProps({
                color: '#0a880a',
                backgroundColor: '#a2dfa2',
                title: 'Finalizada',
                message: 'A resolução da ocorrência foi finalizada. Por gentileza, confira no local.',
                featherIcon: 'check-circle'
            });
        }
    }, [status])

    return (
        <View style={styles.container}>
            <Text style={styles.statusLabel}>Status da ocorrência:</Text>
            <View style={[styles.statusBox, {
                borderColor: statusProps?.color, backgroundColor: statusProps?.backgroundColor
            }]}>
                <View style={styles.row}>
                    <Feather name={statusProps?.featherIcon} size={40} color={statusProps?.color} />
                    <Text style={[styles.statusText, { color: statusProps?.color }]}>{statusProps?.title}</Text>
                </View>
                <Text style={[styles.statusMessageText, { color: statusProps?.color }]}>{statusProps?.message}</Text>
            </View>
        </View>
    );
}