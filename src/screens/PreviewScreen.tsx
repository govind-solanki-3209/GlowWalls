import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import downloadWallpaper from '../utils/downloadWallpaper';

const PreviewScreen = ({ route }: any) => {
    const { image } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.wallpaper} />

            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.button}
                    onPress={() => downloadWallpaper(image)}
                >
                    <Icon name="download-outline" size={22} color="#fff" />
                    <Text style={styles.buttonText}>Download</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPrimary}>
                    <Icon name="checkmark-circle-outline" size={22} color="#000" />
                    <Text style={styles.buttonTextPrimary}>Set Wallpaper</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PreviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    wallpaper: {
        flex: 1,
        resizeMode: 'cover',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 20,
        left: 16,
        right: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        backgroundColor: '#00000090',
        paddingVertical: 14,
        borderRadius: 16,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', // ✅ ICON + TEXT
        gap: 6,
    },
    buttonPrimary: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 6,
    },
    buttonText: {
        color: colors.textWhite,
        fontWeight: '600',
    },
    buttonTextPrimary: {
        color: '#000',
        fontWeight: '700',
    },
});
