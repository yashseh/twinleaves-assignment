import {StyleSheet} from 'react-native';
import {colors} from '../../assets/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash: {
    width: '100%',
  },
  imageContainer: {
    backgroundColor: colors.grey,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
});
