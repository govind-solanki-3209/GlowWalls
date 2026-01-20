import { Platform, PermissionsAndroid, Alert } from 'react-native';
import RNFS from 'react-native-fs';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

const downloadWallpaper = async (url: string) => {
    try {
        if (Platform.OS === 'android' && Platform.Version < 33) {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            );

            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('Permission denied');
                return;
            }
        }

        const filePath = `${RNFS.CachesDirectoryPath}/glowwalls_${Date.now()}.jpg`;

        await RNFS.downloadFile({
            fromUrl: url,
            toFile: filePath,
        }).promise;

        await CameraRoll.save(filePath, {
            type: 'photo',
            album: 'GlowWalls',
        });

        Alert.alert('Downloaded', 'Wallpaper saved to gallery');
    } catch (error) {
        console.log(error);
        Alert.alert('Error', 'Download failed');
    }
};

export default downloadWallpaper;
