//http://localhost:8081/profile

import { Text, ScrollView, View , StyleSheet} from 'react-native';
import {useLocalSearchParams } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome} from '@expo/vector-icons';

// pegar do backend
const name = "Joao"
const surname = "Silva"
const courseNum = "42"
const courseName = "Computer Science"
const ra = "123321"
const credits = 34
const studentLevel = "undergraduate"

export default function Details() {
  // const { name } = useLocalSearchParams();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView  contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileBox}>
            <View className='flex-row justify-between items-center'>
              <Text style={styles.messageName}>{name} {surname}</Text>
              <View className="flex-row" style={{flexDirection: 'row-reverse'}}>
                <FontAwesome name="address-card" size={25} color="black"></FontAwesome>
              </View>
            </View>
            <View>
              <Text style={styles.addInfo}>- Course: {courseNum} - {courseName}</Text>
              <Text style={styles.addInfo}>- RA: {ra}</Text>
              <Text style={styles.addInfo}>- Semester credits: {credits}</Text>
              <Text style={styles.addInfo}>- Academic Level: {studentLevel}</Text>
            </View>
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
  row: {
    flexDirection: "row",
    padding: 10,
    flex: 1
  },
  messageName: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 50
  },
  profileBox: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    // justifyContent: "center",
    // alignContent: "center",
    borderRadius: 20,
    padding: 20
  },
  addInfo: {
    fontSize: 15,
    marginVertical: 10,
  },
})
