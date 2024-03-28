import {StyleSheet} from 'react-native';
import {colors} from '../../assets/themes';
import {deviceHeight} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
  },
  cardContainer: {flex: 1, marginHorizontal: 5},
  emptyContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight * 0.85,
  },
  errorMessage: {
    fontSize: 18,
    textAlign: 'center',
  },
  separator: {
    height: 30,
  },
});
