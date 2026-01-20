import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../utils/colors';

const Header = () => {
    return (
        <LinearGradient
            colors={['#7C7CFF', '#00FFD1']}
            style={styles.container}
        >
            <Text style={styles.title}>GlowWalls</Text>
            <Text style={styles.subtitle}>Premium Wallpapers</Text>
        </LinearGradient>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 28,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        color: '#000',
        opacity: 0.7,
    },
});
