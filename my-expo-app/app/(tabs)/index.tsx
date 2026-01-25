// http://localhost:8081/

import { Stack, Link } from 'expo-router';
import {IconButton} from 'react-native-paper';
import { View, Text, Pressable} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Home() {
  return (
  // <Container>
  //   <ScreenContent path="app/(tabs)/profile.tsx" title="Home"></ScreenContent>
  //   <Link href={"./profile"} asChild>
  //     <Button title="profile"/>
  //   </Link>
  // </Container>
  <View className="flex-row justify-around items-center bg-white p-4 rounded-t-3xl shadow-lg absolute bottom-0 w-full">
  <Link href="/disciplinas" asChild>
    <Pressable className="items-center">
      <FontAwesome name="book" size={25} color="#4A148C" /> {/* Use o roxo do Figma */}
      <Text className="text-xs font-bold text-gray-800">Disciplines</Text>
    </Pressable>
  </Link>
  <Link href="/notifications" asChild>
    <Pressable className="items-center">
    <FontAwesome name="bell" size={25} color="#555" />
    <Text className="text-xs text-gray-600">Notifications</Text>
  </Pressable>
  </Link>
  <Link href="/profile" asChild>
    <Pressable className="items-center">
    <FontAwesome name="address-card" size={25} color="#555" />
    <Text className="text-xs text-gray-600">Profile</Text>
  </Pressable>
  </Link>
  </View>
    // <View className={styles.container}>
    //   <Stack.Screen options={{ title: 'Home' }} />
    //   <Container>
    //     <ScreenContent path="app/index.tsx" title="Home"></ScreenContent>
    //     <Link href={{ pathname: '/details'}} asChild>
    //       <Button title="Show Details" />
    //     </Link>
    //     <Link href = {{pathname: '/disciplinas'}} asChild>
    //     <Button title='Show Disciplinas'/>
    //     </Link>
    //   </Container>
    // </View>
  );
}

const styles = {
  container: 'flex flex-1 bg-white items-center justify-center',
};
