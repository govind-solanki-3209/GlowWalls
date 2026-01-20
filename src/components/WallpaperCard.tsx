import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 24;

const WallpaperCard = ({ image }: any) => {
    const navigation: any = useNavigation();

    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Preview', { image })}
        >
            <Image source={{ uri: image }} style={styles.image} />
        </TouchableOpacity>
    );
};

export default WallpaperCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        borderRadius: 18,
        marginBottom: 16,
        marginHorizontal: 8,
        overflow: 'hidden',
        width: CARD_WIDTH,
    },
    image: {
        width: '100%',
        height: 220,
    },
});
