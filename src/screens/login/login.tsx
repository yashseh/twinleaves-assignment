import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {googleSignInHandler} from '../../utils/gooleSignIn';
import {ICONS} from '../../assets/iconExpoter';
import {STRINGS} from '../../utils/strings';
import {useDispatch} from 'react-redux';
import {updateUserDetails} from '../../state/slices/user/userSlice';
import {displayLoader} from '../../state/slices/global/globalSlice';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../navigation/types';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  /**
 sign-in by google Handler
   */
  const signInHandler = async () => {
    try {
      dispatch(displayLoader(true));
      const googleLoginResponse = await googleSignInHandler();
      if (googleLoginResponse.token) {
        dispatch(updateUserDetails(googleLoginResponse));
        navigation.reset({
          index: 0,
          routes: [{name: 'products'}],
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(displayLoader(false));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signInHandler}>
        <View style={styles.button}>
          <Image style={styles.googleIcon} source={ICONS.ic_google} />
          <Text style={styles.loginText}>{STRINGS.login}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
