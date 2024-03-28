import {StyleSheet} from 'react-native';
import {colors} from '../../assets/themes';
import {deviceHeight} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary,
    paddingTop: 20,
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
  backButton: {
    position: 'absolute',
    top: 10,
    zIndex: 1,
    left: 10,
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorMessage: {
    fontSize: 18,
    textAlign: 'center',
  },
  separator: {
    height: 30,
  },
  bottomSpace: {
    height: 70,
  },
});
