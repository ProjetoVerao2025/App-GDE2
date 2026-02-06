// http://localhost:8081/

import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, useWindowDimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

/* OUTPUT TYPE CLASS FROM BACKEND (MODEL)
{
    "status": 1,
    "message": "Turmas encontradas",
    "classes": [
        {
            "letter": "A",
            "schedule": [
                {
                    "weekday": 1,
                    "start_hour": 14,
                    "lesson_count": 2
                },
                {
                    "weekday": 5,
                    "start_hour": 19,
                    "lesson_count": 4
                }
            ]
        }
    ]
}
*/

const timeSlots = [
  "08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00",
  "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00", 
  "18:00-19:00", "19:00-20:00", "20:00-21:00", "21:00-22:00",
  "22:00- 23:00",
]

// ta usando enum, 1 = segunda, 5 = sexta
const daysWeek = [
  "Mon", "Tue", "Wed", "Thu", "Fri"
]

type ItemData = {
  time: string;
  code: string;
  class: string;
  day: string;
};

// data vinda do backend devera ser colocada aqui (trocar const -> let)
const data: ItemData[] = [
  // {
  //   time: '08:00-09:00',
  //   code: 'MA111',
  //   class: 'G',
  //   day: 'Mon',
  // },
  // {
  //   time: '09:00-10:00',
  //   code: 'MA211',
  //   class: 'H',
  //   day: 'Tue',
  // },
  // {
  //   time: '10:00-11:00',
  //   code: 'MA111',
  //   class: 'G',
  //   day: 'Mon',
  // },
  {
    time: '14:00-15:00',
    code: 'MA311',
    class: 'W',
    day: 'Fri',
  },
  {
    time: '15:00-16:00',
    code: 'MA311',
    class: 'W',
    day: 'Fri',
  },
  {
    time: '19:00-20:00',
    code: 'MC358',
    class: 'A',
    day: 'Wed',
  },
  {
    time: '20:00-21:00',
    code: 'MC358',
    class: 'A',
    day: 'Wed',
  },
  {
    time: '19:00-20:00',
    code: 'MC404',
    class: 'B',
    day: 'Tue',
  },
  {
    time: '20:00-21:00',
    code: 'MC404',
    class: 'B',
    day: 'Tue',
  }
]

// let arr = new Set<string>();
// for (var object of data){
//   for (const [key, value] of Object.entries(object)) {
//     if (key == 'time'){
//       arr.add(value)
//     }
//   }
// }
// const timeArray = Array.from(arr)
// const uniqueTimes = Array.from(new Set(data.map(item => item.time))).sort()
const timeArray = Array.from(new Set(data.map(item => item.time))).sort();

var Arr_size = parseInt("0");
for (var i of timeArray) {
  Arr_size += 1;
  //console.log(i)
}


type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  title: string
};

const Item = ({title, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

// como lidar com sobreposicao de materias no mesmo dia e horario?
export default function Home() {
  const {width} = useWindowDimensions();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* horizontal showsHorizontalScrollIndicator={false} vertical showsVerticalScrollIndicator={false} */}
        <ScrollView contentContainerStyle={styles.scrollContent}> 
          <View>
            <Text style={styles.messageHeader}>Your grid:</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.timeCell} />
              {daysWeek.map(day => (
                <View key={day} style={styles.daysCell}>
                  <Text>{day}</Text>
                </View>))}
              </View>
              {/* tempo so aparece dinamicamente a medida dos hoarios que se tem */}
              {timeArray.map(time => (
              <View key={time} style={styles.row}>
                <View style={styles.timeCell}>
                  <Text>{time}</Text>
                </View>
              {daysWeek.map(day => {
                const classHere = data.find(
                  c => c.day === day && c.time == time
                );
              return (
              <View key={day} style={styles.cell}>
                {classHere && (
                  <View style={styles.classBlock}>
                    <Text style={styles.blockText}>{classHere.code}</Text>
                    <Text style={styles.blockText}>{classHere.class}</Text>
                  </View>)}
              </View>);
              })}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
)}

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
    padding: 20
  },
  messageHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  headerTopBar:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  heading: {
    flex:1,
    fontSize: 15,
    marginLeft: 120,
  },
  row: {
    flexDirection: 'row',
    flexShrink: 0,
  },
  cell: {
    flex:1,
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  daysCell: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  timeCell: {
    width: 40,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  classBlock: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
  },
  blockText: {
    fontFamily: "system-ui",
    fontSize: 15,
  },
});