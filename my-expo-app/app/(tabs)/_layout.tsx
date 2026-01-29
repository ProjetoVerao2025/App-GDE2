import { Pressable, View, Text, StyleSheet} from 'react-native';
import '../../global.css';
import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StackScreen } from 'react-native-screens';
import React, {useState} from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// nome do usuario obtido atraves do login
const user = 'Absence'

export default function Layout() {
  return <Stack 
    screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffffff',
        },
        headerTintColor: '#000000ff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <View style={[styles.container, {flexDirection: 'row-reverse'}]}>
          <Link href="/settings">
            <Pressable>
              <FontAwesome name="cog" size={25} color="black" style={{ marginRight: 15 }}/>
            </Pressable>
          </Link>
          <Link href="/">
            <Pressable>
              <FontAwesome name="home" size={25} color="black" style={{ marginRight: 15 }}/>
            </Pressable>
          </Link>
          </View>
        ),
        headerLeft: () => (
          <Text style={styles.titleText}>Hi, {user}!</Text>
        ),
      }}
    />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});