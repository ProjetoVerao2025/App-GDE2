// http://localhost:8081/

import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const timeSlots = [
  "08:00-10:00", "10:00-12:00", "14:00-16:00",
  "16:00-18:00", "19:00-21:00", "21:00-23:00"
]

const daysWeek = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
]

type ItemData = {
  time: string;
  code: string;
  day: string;
};

const data: ItemData[] = [
  {
    time: '10:00-12:00',
    code: 'MA311',
    day: 'Segunda',
  },
  {
    time: '19:00-21:00',
    code: 'MC358',
    day: 'Quarta',
  },
  {
    time: '19:00-21:00',
    code: 'MC404',
    day: 'Terca',
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
  const renderItem = ({item}) => (
    <View>
      <Text style={styles.cell}>{item.code}</Text>
    </View>
  )
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.heading}>Segunda</Text>
            <Text style={styles.heading}>Terca</Text>
            <Text style={styles.heading}>Quarta</Text>
            <Text style={styles.heading}>Quinta</Text>
            <Text style={styles.heading}>Sexta</Text>
          </View>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.time.toString()}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
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
    backgroundColor: " #4A148C",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  heading: {
    flex:1,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 2,
    elevation: 1,
    borderRadius: 3,
    borderColor: "#fff",
    padding: 10,
    backgroundColor: "#fff",
  },
  cell: {
    fontSize: 15,
    textAlign: 'left',
    flex: 1,
  }
});
