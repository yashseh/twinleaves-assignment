import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/themes';

export const styles = StyleSheet.create({
  counterContainer: {
    backgroundColor: colors.navy_blue,
    borderRadius: 16,
    padding: 10,
  },
  counterTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 20,
  },
  quantityContainer: {flexDirection: 'row', alignItems: 'center'},
  plusIcon: {width: 15, height: 15},
});
