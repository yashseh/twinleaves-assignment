import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  productImage: {
    width: 70,
    height: 100,
  },
  brandName: {fontSize: 10, fontWeight: '600', color: '#5E5C66'},
  productDescription: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: '600',
    color: '#23212E',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    fontWeight: '700',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productInfo: {
    marginLeft: 10,
    // flex: 1,
    width: '50%',
    justifyContent: 'space-between',
  },
});
