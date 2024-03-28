import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/themes';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomColor: colors.navy_blue,
    backgroundColor: colors.card_grey,
  },
  row: {flexDirection: 'row'},
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  marginLeft: {marginLeft: 10},
  userName: {
    color: colors.navy_blue,
    fontWeight: '700',
  },
  welcomeText: {
    color: 'grey',
    fontWeight: '700',
  },
  icon: {width: 30, height: 30},
  iconLogout: {
    width: 25,
    height: 25,
  },
});
