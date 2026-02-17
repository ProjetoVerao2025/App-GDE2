import React, { memo, useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, useWindowDimensions, Image, Pressable} from 'react-native';
import Button from '../../components/Button';
import TextInput from '../../components/Textinput';
import BackButton from '../../components/BackButton';
import { Link, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import {emailValidator,passwordValidator,nameValidator, newPasswordValidator,} from '../../core/utils';
import { DefaultTheme } from 'react-native-paper';

export default function Register() {
  const [password, setPassword] = useState({ value: '', error: '' });
  const [password2, setPassword2] = useState({ value: '', error: '' });
  const [password3, setPassword3] = useState({ value: '', error: '' });
  const router = useRouter()

  const _onConfirmPressed = () => {
    const newPasswordError = newPasswordValidator(password2.value, password3.value)
    const passwordError = passwordValidator(password.value);
    const passwordError2 = passwordValidator(password2.value);
    const passwordError3 = passwordValidator(password3.value);
    if (passwordError) {
        setPassword({ ...password, error: passwordError });
    }
    if (passwordError2 || passwordError3) {
        if (passwordError2){
            setPassword2({ ...password2, error: passwordError2 });
        }
        if (passwordError3){
            setPassword3({ ...password3, error: passwordError3 });
        }
        return;
    }
    else if (newPasswordError) {
        setPassword2({ ...password2, error: newPasswordError});
        setPassword3({ ...password3, error: newPasswordError});
        return;
    }
    router.replace("/sign_in")
  };
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <View style={{flexDirection: "row", padding:10}}>
                <Pressable hitSlop={10} onPress={() => router.replace("/sign_in")}>
                    <FontAwesome name={'arrow-left'} size={25} style={styles.backButton}></FontAwesome>
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.textao}>Como voce nao lembra da senha??</Text>
                    </View>
                    <Image 
                    source={require("../../assets/password.png")}
                    resizeMode="contain"
                    style = {styles.image}
                    />
                    <View style={styles.row}>
                        <Text>eepy.</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            label="Old Password"
                            returnKeyType="done"
                            value={password.value}
                            onChangeText={text => setPassword({ value: text, error: '' })}
                            error={!!password.error}
                            errorText={password.error}
                            secureTextEntry
                        />
                        <TextInput
                            label="New Password"
                            returnKeyType="done"
                            value={password2.value}
                            onChangeText={text => setPassword2({ value: text, error: '' })}
                            error={!!password2.error}
                            errorText={password2.error}
                            secureTextEntry
                        />
                        <TextInput
                            label="Confirm New Password"
                            returnKeyType="done"
                            value={password3.value}
                            onChangeText={text => setPassword3({ value: text, error: '' })}
                            error={!!password3.error}
                            errorText={password3.error}
                            secureTextEntry
                        />
                        <Button mode="contained" onPress={_onConfirmPressed} style={{marginTop: 24}}>
                            Confirm
                        </Button>
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
    // welcome: {
    //     fontSize: 20,
    //     fontWeight: "bold",
    //     marginVertical: 10
    // },
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
    backButton: {
        alignSelf: "flex-start"
    },
    textao: {
        fontSize: 15,
        lineHeight: 26,
        // color: DefaultTheme.colors.secondary,
        textAlign: 'center',
        // marginBottom: 15,
    },
    label: {
        color: DefaultTheme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: '#600EE6',
    },
})