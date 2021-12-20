import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    service: {
        color: '#009E86',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 30,
        marginTop: 32,
        marginBottom: 8,
    },

    info: {
        color: '#009E86',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 15,
        marginTop: 8,
    },

    mapContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1.2,
        borderColor: '#B3DAE2',
        marginTop: 40,
        backgroundColor: '#E6F7FB',
    },

    mapStyle: {
        width: '100%',
        height: 150,
    },

    routesContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    routesText: {
        fontFamily: 'Nunito_700Bold',
        color: '#0089a5'
    },
});