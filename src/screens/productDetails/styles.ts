import {StyleSheet} from 'react-native';
import {colors} from '../../assets/themes';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
  },
  spacer: {height: 10},
  errorMessage: {
    fontSize: 18,
    color: colors.navy_blue,
    fontWeight: '700',
  },
  image: {width: 200, height: 200},
  imageContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
