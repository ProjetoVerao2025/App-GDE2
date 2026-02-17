import React, { memo, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, useWindowDimensions, Image, Pressable} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { emailValidator, passwordValidator } from '../../core/utils';
import TextInput from '../../components/Textinput';
import { Link, useRouter } from 'expo-router';
import Button from '../../components/Button';
import { DefaultTheme, Button as PaperButton } from 'react-native-paper';

export default function Login() {
    const router = useRouter()
    return(
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.title}>HMMMMMMMMMMM...</Text>
                    </View>
                    <Image 
                    source={require("../../assets/umm.png")}
                    resizeMode="contain"
                    style = {styles.image}
                    />
                    <View style={styles.row}>
                        <Text>...Quien eres?...</Text>
                    </View>
                    <View style={styles.container}>
                        <Button mode="contained" onPress={() => router.push('/sign_in')}>
                        Sign-In
                        </Button>
                        <Text style={styles.textao}>Acesse suas credenciais pelo login!</Text>
                        <Button
                        mode="outlined"
                        onPress={() => router.push('/sign_up')}
                        >
                        Sign-Up
                        </Button>
                        <Text style={styles.textao}>Ainda nao tem uma conta?</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
    )
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
        justifyContent: "center",
        alignContent: "center"
    },
    image: {
        padding: 10,
        width: 500,
        height: 200,
    },
    row: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "center"
    },
    title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    // alignContent: "center",
    },
    textao: {
        fontSize: 15,
        lineHeight: 26,
        color: DefaultTheme.colors.secondary,
        textAlign: 'center',
        marginBottom: 15,
    },
})