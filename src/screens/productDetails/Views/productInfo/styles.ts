import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/themes';

export const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    backgroundColor: colors.card_grey,
    borderRadius: 16,
    padding: 20,
  },
  brandName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.title_grey,
  },
  quantityText: {
    color: 'black',
  },
  brandDescription: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '600',
    color: '#23212E',
  },
  quantityContainer: {flexDirection: 'row', marginTop: 10},
  bottomContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mrp: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
});
