// http://localhost:8081/

import { Stack, Link } from 'expo-router';
import { View, Text, Pressable} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const data = {
  // aqui vai os nomes das materias e seus respectivos horarios e dias da semana
}

export default function Home() {
  return (
  <View className="flex-row justify-around items-center bg-white p-4 rounded-t-3xl shadow-lg absolute bottom-0 w-full">
  <Stack.Screen options={{ title: '' }} />
  <Link href="/disciplinas" asChild>
    <Pressable className="items-center">
      <FontAwesome name="book" size={25} color="#4A148C" /> 
      <Text className="text-xs font-bold text-gray-800">Disciplines</Text>
    </Pressable>
  </Link>
  <Link href="/notifications" asChild>
    <Pressable className="items-center">
    <FontAwesome name="bell" size={25} color="#4A148C" />
    <Text className="text-xs font-bold text-gray-800">Notifications</Text>
  </Pressable>
  </Link>
  <Link href="/profile" asChild>
    <Pressable className="items-center">
    <FontAwesome name="address-card" size={25} color="#4A148C" />
    <Text className="text-xs font-bold text-gray-800">Profile</Text>
  </Pressable>
  </Link>
  </View>
  );
}

const styles = {
  container: 'flex flex-1 bg-white items-center justify-center',
};
