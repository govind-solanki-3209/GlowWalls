import { Platform, PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Toast from 'react-native-toast-message';

const downloadWallpaper = async (url: string) => {
    try {
        if (Platform.OS === 'android' && Platform.Version < 33) {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Toast.show({
                type: 'error',
                text1: 'Permission denied',
                text2: 'Please allow storage permission',
            });
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

      Toast.show({
          type: 'success',
          text1: 'Downloaded',
          text2: 'Wallpaper saved to gallery',
      });
  } catch (error) {
      Toast.show({
          type: 'error',
          text1: 'Download failed',
          text2: 'Please try again',
      });
  }
};

export default downloadWallpaper;
