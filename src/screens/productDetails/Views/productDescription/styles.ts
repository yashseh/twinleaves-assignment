import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/themes';

export const styles = StyleSheet.create({
  desContainer: {
    flex: 1,
    backgroundColor: colors.card_grey,
    borderRadius: 16,
    padding: 20,
  },
  desTitle: {
    color: colors.navy_blue,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  des: {
    color: colors.title_grey,
    marginTop: 5,
  },
});
