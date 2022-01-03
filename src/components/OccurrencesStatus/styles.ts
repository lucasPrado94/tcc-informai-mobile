import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    statusLabel: {
        color: '#009E86',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 30,
        marginTop: 32,
        marginBottom: 8,
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    statusText: {
        marginLeft: 5,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 25,
    },

    statusMessageText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 18,
    },

    statusBox: {
        padding: 8,
        borderWidth: 1.2,
        borderRadius: 20,
        marginBottom: 8,
    }
});