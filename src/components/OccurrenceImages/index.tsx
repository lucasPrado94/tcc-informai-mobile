import React from 'react';

import { View, ScrollView, Text, Image } from 'react-native';
import { Image as ImageInterface } from '../../interfaces/image';
import { BASE_URL } from '../../utils/requests';
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
                            source={{ uri: `https://informai.s3.sa-east-1.amazonaws.com/${image.fileName}` }}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}