import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {STRINGS} from '../../utils/strings';
import {currentLoadingState} from '../../state/slices/global/globalSlice';

type ILoaderWrapperProps = {
  children: React.ReactNode;
};

const LoaderWrapper: React.FC<ILoaderWrapperProps> = ({children}) => {
  const isLoading = useSelector(currentLoadingState);

  return (
    <View style={styles.childrenContainer}>
      <View style={styles.childrenContainer}>{children}</View>
      {isLoading && (
        <View style={styles.loaderBlackOverlay}>
          <View style={styles.loaderWhiteContainerView}>
            <ActivityIndicator color={'#FFB800'} size={'large'} />
            <Text style={styles.loaderText}>{STRINGS.loader_text}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default LoaderWrapper;
