import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, useWindowDimensions, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Login() {
    const {width} = useWindowDimensions();
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View >
                    <Image style={{width: width}} source={require("../../assets/umm.png")}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 20,
  },
  container: {
    alignSelf: "center",
    flex: 1,
    flexGrow: 1,
  },
})