import {StyleSheet} from 'react-native';
import {colors} from '../../assets/themes';
import {deviceHeight} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  emptyContainer: {
    position: 'absolute',
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
});
