import { Link} from 'expo-router';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.container}>
            <Text style={styles.title}>{"This screen doesn't exist."}</Text>
            <Image style={styles.image} source={require("../assets/sry.png")}/>
            <View style={styles.row}>
              <Link href="/" asChild>
                <Text style={styles.link}>Go to home screen!</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // container: `flex flex-1 bg-white`,
  // title: `text-xl font-bold`,
  // link: `mt-4 pt-4`,
  // linkText: `text-base text-[#2e78b7]`,
  container: {
    flex: 1,
    flexGrow: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  safeArea: {
    flex:1
  },
  scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    alignContent: "center"
  },
  image: {
    padding: 10,
    width: "100%",
    maxWidth: 420
  },
  link: {
    fontWeight: 'bold',
    color: "#54a1e1ff"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
  }
});
