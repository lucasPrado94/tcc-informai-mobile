import React from 'react';

import { View, ScrollView, Text, Image } from 'react-native';
import { Image as ImageInterface } from '../../interfaces/image';
import { styles } from './styles';

interface OccurrenceImagesProps {
    images: ImageInterface[];
}

export function OccurrenceImages({ images }: OccurrenceImagesProps) {
    return (
        <View style={styles.container}>
            <ScrollView horizontal pagingEnabled>
                {images.map(image => {
                    return (
                        <Image
                            key={image.id}
                            style={styles.image}
                            source={{ uri: `http://192.168.1.104:4000/uploads/${image.fileName}` }}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}