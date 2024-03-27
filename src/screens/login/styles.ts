import {StyleSheet} from 'react-native';
import {colors} from '../../assets/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  loginText: {
    fontSize: 20,
    lineHeight: 26,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
