// http://localhost:8081/disciplinas

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {FontAwesome} from '@expo/vector-icons';
import React, { useState } from 'react'; 

// campo id para cada disciplina pq o ararntes eh carente
type disciplinas = {
  code: string,
  class: string,
}

const data: disciplinas[] = [
  {
    code: "MA322",
    class: "C",
  },
  {
    code: "MA311",
    class: "W",
  },
  {
    code: "MC358",
    class: "A",
  },
  {
    code: "ME323",
    class: "C",
  },
  {
    code: "TT032",
    class: "B",
  },
]


// Acredito que aqui deve ser uma stack para lidar com as ementas 
// de cada materia separadamente (OLHAR DOCUMENTACAO NO README)

export default function Details() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  //DICIONARIO QUE LINKA UM ICONE DO FONT AWESOME COM UM INSTITUTO !!!
  const iconRel = {
    MA: ["calculator"],
    MC: ["desktop", "laptop"],
    ME: ["bar-chart", "pie-chart"],
    other: ["cube", "institution", "paper-plane", "suitcase"],
  }
  const iconsName = [
    "calculator", "bar-chart", "desktop", "cube", "institution",
    "laptop", "paper-plane", "pie-chart", "suitcase",
  ];
  const selectNewRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * iconsName.length);
    setSelectedItem(iconsName[randomIndex]);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollContent}>
          <View style={styles.container}>  
            <Text style={styles.title}>Matriculations:</Text>
            {data.map(discipline => (
              // On Press = Leva ate a pagina da ementa da materia
              <Pressable> 
                <View style={styles.disciplineBox}>
                  <View className='gap-6'style={styles.row}>
                    {iconsName
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 1)
                    .map((item, index) => (
                      <FontAwesome key={index} name={item as any} size={30} color="#000000"></FontAwesome>
                    ))}
                    <View style={styles.elementBox}>
                      <Text style={styles.fontBox}>{discipline.code}</Text>
                    </View>
                    <View style={styles.elementBox}>
                      <Text style={styles.fontBox}>{discipline.class}</Text>
                    </View>
                  </View>
                </View>
              </Pressable> ))}
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
