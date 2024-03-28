import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../assets/themes';
import {STRINGS} from '../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../navigation/types';
import {useSelector} from 'react-redux';
import {userDetailsFromStore} from '../../state/slices/user/userSlice';

const Splash = () => {
  const navigation = useNavigation<NavigationProps>();
  const userDetails = useSelector(userDetailsFromStore);

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: userDetails?.token ? 'products' : 'login'}],
      });
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.assignText}>{STRINGS.assignment}</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assignText: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.navy_blue,
  },
});
