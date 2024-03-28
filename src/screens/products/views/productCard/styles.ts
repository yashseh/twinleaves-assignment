import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/themes';

export const styles = StyleSheet.create({
  cardContainer: {
    height: 233,
    justifyContent: 'space-between',
    backgroundColor: colors.card_grey,
    borderRadius: 16,
  },
  productImage: {
    width: 100,
    alignSelf: 'center',
    height: 100,
  },
  spacer: {
    margin: 10,
  },
  brandName: {
    fontSize: 10,
    fontWeight: '600',
    color: '#5E5C66',
  },
  productDescription: {
    fontSize: 12,
    height: 30,
    marginTop: 5,
    fontWeight: '600',
    color: '#23212E',
  },
  amount: {
    color: 'black',
    marginTop: 5,
    fontWeight: '700',
  },
});
