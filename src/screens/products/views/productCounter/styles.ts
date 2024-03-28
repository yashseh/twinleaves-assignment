import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/themes';

export const styles = StyleSheet.create({
  counterContainer: {
    padding: 13,
    backgroundColor: colors.navy_blue,
    borderBottomLeftRadius: 16,
    borderBottomEndRadius: 16,
  },
  counterTitle: {
    alignSelf: 'center',
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  quantityContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  icon: {
    width: 20,
    height: 20,
  },
});
