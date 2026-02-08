// http://localhost:8081/disciplinas

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {FontAwesome} from '@expo/vector-icons';
import { Button } from '@/components/Button';

type disciplinas = {
  code: string,
  class: string,
}

const data: disciplinas[] = [
  {
    code: "MC322",
    class: "C",
  },
  {
    code: "MC311",
    class: "W",
  },
  {
    code: "MC358",
    class: "A",
  },
  {
    code: "MC323",
    class: "C",
  },
  {
    code: "MC032",
    class: "B",
  },
]

//DICIONARIO QUE LINKA UM ICONE DO FONT AWESOME COM UM INSTITUTO

const iconsName = [
  "calculator", "bar-chart", "desktop", "cube", "institution",
  "laptop", "paper-plane", "pie-chart", "suitcase",
]

// Acredito que aqui deve ser uma stack para lidar com as ementas 
// de cada materia separadamente (OLHAR DOCUMENTACAO NO README)

export default function Details() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollContent}>
          <View style={styles.container}>  
            <Text style={styles.title}>Matriculations:</Text>
            {/* ter um map aqui em data que crie as box dinamically */}
            <View style={styles.disciplineBox}>
              <View className='gap-6'style={styles.row}>
                <FontAwesome name="desktop" size={30} color="#000000"></FontAwesome>
                <View style={styles.elementBox}>
                  <Text style={styles.fontBox}>MC322</Text>
                </View>
                <View style={styles.elementBox}>
                  <Text style={styles.fontBox}>C</Text>
                </View>
                {/* adicionar botao que leva ate ementa da materia */}
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
  scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 50
  },
  title: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  disciplineBox: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
  },
  elementBox: {
    backgroundColor: "#ffffffff",
    borderRadius: 10,
    marginHorizontal:5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  fontBox: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  }
});
