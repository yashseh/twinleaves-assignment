import {StyleSheet} from 'react-native';
import {colors} from '../../assets/themes';
import {deviceHeight} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  footer: {height: 100},
  emptyContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight * 0.85,
  },
  emptyText: {
    color: colors.navy_blue,
    fontWeight: '700',
    fontSize: 20,
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center',
    padding: 20,
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
});
