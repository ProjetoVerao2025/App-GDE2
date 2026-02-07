//http://localhost:8081/profile

import { Text, ScrollView, View , StyleSheet} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome} from '@expo/vector-icons';

export default function Details() {
  // const { name } = useLocalSearchParams();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView  contentContainerStyle={styles.scrollContent}>
          <View style={styles.container}>
             <Text style={styles.messageName}>Vinicius Almeida</Text>
             <FontAwesome name="user-circle-o" size={25} color="black" ></FontAwesome>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
  },
  safeArea: {
    flex: 1,
  },
  messageName: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 20,
  },
  scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 20
  },
})
