//http://localhost:8081/settings

import { Text, ScrollView, View , StyleSheet, Pressable} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome} from '@expo/vector-icons';


export default function Details() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView  contentContainerStyle={styles.scrollContent}>
          <View style={styles.mainConfigBox}>
            {/* cada row = uma configuracao */}
            {/* Email
                Username
                Privacy (change password link with (auth)
                logout logic transfer from profile to here */}
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
  scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 50
  },
  mainConfigBox: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    // justifyContent: "center",
    // alignContent: "center",
    borderRadius: 20,
    padding: 20
  },
});
