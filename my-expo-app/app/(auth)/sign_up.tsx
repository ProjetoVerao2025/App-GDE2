import React, { useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, useWindowDimensions, Image, Pressable} from 'react-native';
import Button from '../../components/Button';
import TextInput from '../../components/Textinput';
import { Link, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import {emailValidator,passwordValidator,nameValidator,} from '../../core/utils';
import { DefaultTheme } from 'react-native-paper';
import { registerData } from '../../services/auth'

// async function goodRegister(name:name) {
        // const data = {name: name.value,email: email.value,password: password.value,}
        // const response = await registerData(data)
        // if (response){
        //     router.replace("/sign_in")
        // }
        // else {
        //     // bad request => erro
        //     return;
        // }
    // }

export default function Register() {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const router = useRouter()

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  };
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <View style={{flexDirection: "row", padding:10}}>
                <Pressable hitSlop={10} onPress={() => router.replace("/home_screen")}>
                    <FontAwesome name={'arrow-left'} size={25} style={styles.backButton}></FontAwesome>
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.textao}>Registre suas credenciais em nosso sistema!</Text>
                    </View>
                    <Image 
                    source={require("../../assets/smol.png")}
                    resizeMode="contain"
                    style = {styles.image}
                    />
                    <View style={styles.row}>
                        <Text>...*Thinks*...</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            label="Name"
                            returnKeyType="next"
                            value={name.value}
                            onChangeText={text => setName({ value: text, error: '' })}
                            error={!!name.error}
                            errorText={name.error}
                        />
                        <TextInput
                            label="Email"
                            returnKeyType="next"
                            value={email.value}
                            onChangeText={text => setEmail({ value: text, error: '' })}
                            error={!!email.error}
                            errorText={email.error}
                            autoCapitalize="none"
                            // autoCompleteType="email"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                        />

                        <TextInput
                            label="Password"
                            returnKeyType="done"
                            value={password.value}
                            onChangeText={text => setPassword({ value: text, error: '' })}
                            error={!!password.error}
                            errorText={password.error}
                            secureTextEntry
                        />
                        <Button mode="contained" onPress={_onSignUpPressed} style={{marginTop: 24}}>
                            Register
                        </Button>
                        <View style={styles.row}>
                            <Text style={styles.label}>Already have an account?</Text>
                            <Link href="/sign_in" asChild>
                                <Pressable hitSlop={10}>
                                    <Text style={styles.link}> Login</Text>
                                </Pressable>
                            </Link>
                        </View>
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