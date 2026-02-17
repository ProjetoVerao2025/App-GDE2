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
                Privacy (change password link with (auth)fire 
                logout logic transfer from profile to here */}
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
              <View style={styles.row} className='gap-2'>
                <FontAwesome name="envelope-o" size={20}></FontAwesome>
                <Text style={styles.settingsName}>Email</Text>
              </View>
              <View className="flex-row" style={{flexDirection: 'row-reverse'}}> 
                <FontAwesome style={styles.arrow} name="angle-right" size={25}></FontAwesome>
              </View>
            </View>
            {/* Cada instancia dessa view deve ser um botao (OnPress functionality
              disciplines, ementa, alike => use Stack) */}
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
              <View style={styles.row} className='gap-2'>
                <FontAwesome name="user-o" size={20}></FontAwesome>
                <Text style={styles.settingsName}>Username</Text>
              </View>
              <View className="flex-row" style={{flexDirection: 'row-reverse'}}> 
                <FontAwesome style={styles.arrow} name="angle-right" size={25}></FontAwesome>
              </View>
            </View>
            {/* Privacy => link direto com change password */}
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
              <View style={styles.row} className='gap-2'>
                {/* info, key */}
                <FontAwesome name="lock" size={20}></FontAwesome>
                <Text style={styles.settingsName}>Privacy</Text>
              </View>
              <View className="flex-row" style={{flexDirection: 'row-reverse'}}> 
                <FontAwesome style={styles.arrow} name="angle-right" size={25}></FontAwesome>
              </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
              <View style={styles.row} className='gap-2'>
                <FontAwesome name="sign-out" size={20}></FontAwesome>
                <Text style={styles.settingsName}>Logout</Text>
              </View>
              <View className="flex-row" style={{flexDirection: 'row-reverse'}}> 
                <FontAwesome style={styles.arrow} name="angle-right" size={25}></FontAwesome>
              </View>
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
    justifyContent: "space-between",
    // marginBottom: 10,
  },
  scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 50
  },
  mainConfigBox: {
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    // justifyContent: "center",
    // alignContent: "center",
    borderRadius: 20,
    padding: 20
  },
  arrow: {
    alignSelf: "flex-end",
  },
  settingsName: {
    justifyContent: "center",
    alignContent: "center",
  },
});
