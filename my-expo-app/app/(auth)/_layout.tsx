import { StyleSheet, ImageBackground} from 'react-native';
import '../../global.css';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Slot } from 'expo-router';


const image = {url: 'my-expo-app/assets'}

export default function Layout() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f3f3f3'}} edges={['top', 'left', 'right']}>
      <ImageBackground source={require('../../assets/Background.png')} resizeMode="cover" style={styles.image}>
        <Slot />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
});