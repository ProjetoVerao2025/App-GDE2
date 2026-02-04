import { Pressable, View, Text, StyleSheet} from 'react-native';
import '../../global.css';
import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Stack, Link } from 'expo-router';
import {FontAwesome} from '@expo/vector-icons';
import { Slot } from 'expo-router';

const Header = () => {
  const user = 'Absence';
  return (
    <View className="flex-row justify-between items-center bg-white p-4 rounded-t-3xl shadow-lg w-full">
       <Text style={styles.titleText}>Hi, {user}!</Text>
       <View className="flex-row items-center gap-2" style={{flexDirection: 'row-reverse'}}>
           <Link href="/settings" asChild>
             <Pressable hitSlop={10}>
               <FontAwesome name="cog" size={25} color="black" />
             </Pressable>
           </Link>
           <Link href="/" asChild>
             <Pressable hitSlop={10}>
               <FontAwesome name="home" size={25} color="black" style={{ marginRight: 30 }}/>
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
   <View style={{flex:1, backgroundColor: '#D9D9D9'}} className="flex-row justify-around items-center bg-gray p-4 rounded-t-3xl shadow-lg absolute bottom-0 w-full">
        <Stack.Screen options={{ title: '' }} />
          <Link href="/disciplinas" asChild>
            <Pressable className="items-center">
              <FontAwesome name="book" size={25} color="#000000" /> 
              <Text className="text-xs font-bold text-gray-800">Disciplines</Text>
            </Pressable>
          </Link>
          <Link href="/notifications" asChild>
            <Pressable className="items-center">
              <FontAwesome name="bell" size={25} color="#000000" />
              <Text className="text-xs font-bold text-gray-800">Notifications</Text>
            </Pressable>
          </Link>
          <Link href="/profile" asChild>
            <Pressable className="items-center">
              <FontAwesome name="address-card" size={25} color="#000000" />
              <Text className="text-xs font-bold text-gray-800">Profile</Text>
            </Pressable>
          </Link>
      </View>
  )
}

export default function Layout() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f3f3f3'}} edges={['top', 'left', 'right']}>
      <Header />
      <Slot />
      <Footer />
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
});