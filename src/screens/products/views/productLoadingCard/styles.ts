import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/themes';

export const styles = StyleSheet.create({
  cardContainer: {
    height: 233,
    backgroundColor: colors.card_grey,
    justifyContent: 'space-between',
    borderRadius: 16,
  },
  skeltonImage: {
    backgroundColor: colors.skelton,
    width: 70,
    height: 80,
    marginVertical: 10,
    borderRadius: 12,
    alignSelf: 'center',
  },
  skeltonText: {
    backgroundColor: colors.skelton,
    width: '30%',
    marginLeft: 10,
    borderRadius: 8,
    height: 10,
  },
  topText: {
    width: '85%',
  },
  bottomText: {
    width: '85%',
    marginTop: 5,
  },
  mrpText: {
    backgroundColor: colors.skelton,
    width: '20%',
    marginLeft: 10,
    borderRadius: 8,
    height: 20,
  },
  counter: {
    padding: 20,
    backgroundColor: colors.skelton,
    borderBottomLeftRadius: 16,
    borderBottomEndRadius: 16,
  },
});
