import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    label: {
        color: '#009E86',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 18,
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
        backgroundColor: '#59CF3B',
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
    },

    uploadedImagesContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    uploadedImage: {
        width: 64,
        height: 64,
        borderRadius: 20,
        marginRight: 8,
    },

    excludeImage: {
        marginRight: 10,
    },

    uploadedImageMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#009E86',
        marginRight: 5,
    },

    uploadedImageText: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#0089a5',
    },
});