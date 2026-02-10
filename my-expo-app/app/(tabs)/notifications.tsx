//http://localhost:8081/notifications

import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

// Precisa da hora em que a not fora emitida e o user
const data = {

}

export default function Details() {
  // notification_type: "equivalent_icon_name"
  const relationship = {
    late: "map-signs", cancel: "window-close", 
    skip: "user-o", exam: "calendar-check-o" 
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.notificationBlock}>
            <FontAwesome style={styles.icon} name="map-signs" size={40} color='black'></FontAwesome>
            <View style={styles.textBlock}>
              <Text style={styles.title}>Late Class</Text>
              <Text style={styles.body}>A sua aula fora remarcada ou teve seu horario
              padrao alterado para o dia 'day' as 'horario novo'</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsElement}>2h ago</Text>
              {/* <Text style={styles.detailsElement}>by kgm</Text> */}
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
  scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 50
  },
  notificationBlock: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    opacity: .5,
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
    alignContent: "center",
  },
  textBlock: {
    padding: 10,
    flex:3,
  },
  title: {
    fontWeight: "bold",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  body: {
    alignContent: "flex-start",
    flexShrink: 1,
  },
  details: {
    flex:1,
    marginVertical: 10,
    justifyContent: "space-between",
    alignContent: "flex-end"
  },
  detailsElement: {
    alignSelf: "flex-end",
    marginRight: 10
  }
});
