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
    fontWeight: '700',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
