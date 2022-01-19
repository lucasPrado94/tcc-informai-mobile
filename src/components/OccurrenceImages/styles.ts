import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        width: Dimensions.get('window').width,
        height: 360,
        resizeMode: 'cover',
      },
});