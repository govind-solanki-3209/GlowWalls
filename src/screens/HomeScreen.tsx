import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import Header from '../components/Header';
import WallpaperCard from '../components/WallpaperCard';

const wallpapers = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1519608487953-e999c86e7455',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
];

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={wallpapers}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <WallpaperCard image={item} />}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    list: {
        paddingHorizontal: 8,
        padding: 16,
    },
});
