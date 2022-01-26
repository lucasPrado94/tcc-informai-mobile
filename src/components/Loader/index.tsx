import React from 'react';

import { View, Modal, Image, ActivityIndicator, Text } from 'react-native';

import { styles } from './styles';
import icon from '../../images/icon.png';

interface LoadingProps {
    isLoading: boolean
}

export function Loader({ isLoading }: LoadingProps) {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isLoading}
            style={{ zIndex: 1100 }}
            onRequestClose={() => { }}>
            <View style={styles.modalBackground}>
                <Image source={icon} />
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator animating={isLoading} color="black" />
                </View>
                <Text>Por favor, aguarde...</Text>
            </View>
        </Modal>
    )
}