import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {googleSignInHandler} from '../../utils/gooleSignIn';
import {ICONS} from '../../assets/iconExpoter';
import {STRINGS} from '../../utils/strings';
import {useDispatch} from 'react-redux';
import {updateUserDetails} from '../../state/slices/user/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, updateIsLoading] = useState(false);

  /**
 sign-in by google Handler
   */
  const signInHandler = async () => {
    try {
      updateIsLoading(true);
      const googleLoginResponse = await googleSignInHandler();
      if (googleLoginResponse.token) {
        dispatch(updateUserDetails(googleLoginResponse));
      }
    } catch (error) {
      console.log(error);
    } finally {
      updateIsLoading(false);
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
