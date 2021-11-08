import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});