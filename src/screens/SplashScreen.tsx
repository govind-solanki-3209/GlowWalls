import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>GlowWalls</Text>
            <Text style={styles.subtitle}>
                Beautiful Wallpapers for Your Phone
            </Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 42,
        color: colors.primary,
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 14,
        color: colors.textGray,
    },
});
