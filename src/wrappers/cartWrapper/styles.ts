import {StyleSheet} from 'react-native';
import {colors} from '../../assets/themes';

export const styles = StyleSheet.create({
  cartContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 2,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: colors.navy_blue,
    backgroundColor: colors.card_grey,
  },
  flex: {flexDirection: 'row', alignItems: 'center'},
  priceTitle: {
    color: '#23212E',
    fontSize: 14,
  },
  amount: {
    fontWeight: '800',
    color: '#23212E',
    fontSize: 18,
  },
  bin: {
    paddingLeft: 20,
  },
  mainView: {flex: 1},
});
