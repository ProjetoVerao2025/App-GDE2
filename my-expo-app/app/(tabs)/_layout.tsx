import { Pressable, View, Text, StyleSheet, ImageBackground} from 'react-native';
import '../../global.css';
import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Stack, Link } from 'expo-router';
import {FontAwesome} from '@expo/vector-icons';
import { Slot } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';

async function GetOrientation() {
  let orientation = await ScreenOrientation.getOrientationAsync();
  // export declare enum Orientation {
  //     UNKNOWN = 0,
  //     PORTRAIT_UP = 1,
  //     PORTRAIT_DOWN = 2,
  //     LANDSCAPE_LEFT = 3,
  //     LANDSCAPE_RIGHT = 4
  return orientation
}

const image = {url: 'my-expo-app/assets'}

const Header = () => {
  const user = 'Absence';
  return (
    <View className="flex-row justify-between items-center p-4 rounded-t-3xl w-full">
       <Text style={styles.titleText}>Hi, {user}!</Text>
       <View className="flex-row items-center gap-6" style={{flexDirection: 'row-reverse'}}>
           <Link href="/settings" asChild>
             <Pressable hitSlop={10}>
               <FontAwesome name="cog" size={25} color="black" />
             </Pressable>
           </Link>
           <Link href="/profile" asChild>
            <Pressable hitSlop={10}>
              <FontAwesome name="user-circle-o" size={25} color="#000000" />
            </Pressable>
          </Link>
        </View>
    </View>
  )
}

// BACK BUTTON FUNCTIONALLITY ADD !?!?!?!?!?
// #4A148C = COR BONITA; SETA = 'reply' = or 'arrow-left' and 'chevron-left'

const Footer = () => {
  return (
   <View style={{ backgroundColor: '#D9D9D9'}}className="flex-row justify-around items-center bg-gray p-4 rounded-t-3xl shadow-lg w-full">
        <Stack.Screen options={{ title: '' }} />
          <Link href="/disciplinas" asChild>
            <Pressable hitSlop={10} className="items-center">
              <FontAwesome name="book" size={25} color="#000000" /> 
              <Text className="text-xs font-bold text-gray-800">Disciplines</Text>
            </Pressable>
          </Link>
          <Link href="/" asChild>
             <Pressable hitSlop={10} className="items-center">
               <FontAwesome name="home" size={30} color="#000000"/>
               <Text className="text-xs font-bold text-gray-800">Home</Text>
            </Pressable> 
          </Link>
          <Link href="/notifications" asChild>
            <Pressable hitSlop={10} className="items-center">
              <FontAwesome name="bell" size={25} color="#000000" />
              <Text className="text-xs font-bold text-gray-800">Notifications</Text>
            </Pressable>
          </Link>
      </View>
  )
}

export default function Layout() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f3f3f3'}} edges={['top', 'left', 'right']}>
      <ImageBackground source={require('../../assets/Background.png')} resizeMode="cover" style={styles.image}>
        <Header />
        <Slot />
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
  landscapeImage: {
    transform: [{rotate: '90deg'}],
    flex: 1,
    justifyContent: "center",
  },
});