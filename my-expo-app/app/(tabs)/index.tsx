// http://localhost:8081/

import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const timeSlots = [
  "08:00-10:00", "10:00-12:00", "14:00-16:00",
  "16:00-18:00", "19:00-21:00", "21:00-23:00"
]

const daysWeek = [
  "Mon", "Tue", "Wed", "Thu", "Fri"
]

type ItemData = {
  time: string;
  code: string;
  class: string;
  day: string;
};

const data: ItemData[] = [
  {
    time: '14:00-16:00',
    code: 'MA311',
    class: 'W',
    day: 'Fri',
  },
  {
    time: '19:00-21:00',
    code: 'MC358',
    day: 'Wed',
    class: 'A',
  },
  {
    time: '19:00-21:00',
    class: 'B',
    code: 'MC404',
    day: 'Tue',
  }
]

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

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.timeCell} />
              {daysWeek.map(day => (
                <View key={day} style={styles.daysCell}>
                  <Text>{day}</Text>
                </View>))}
              </View>
              {timeSlots.map(time => (
              <View key={time} style={styles.row}>
                <View style={styles.timeCell}>
                  <Text>{time}</Text>
                </View>
              {daysWeek.map(day => {
                const classHere = data.find(
                  c => c.day === day && c.time === time
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
  item: {
    backgroundColor: '#B3B1B1',
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
    width: 100,
    height: 100,
    borderWidth: 1,
  },
  daysCell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  timeCell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  classBlock: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 50,
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blockText: {
    fontFamily: "system-ui",
    fontSize: 20,
  }
});
