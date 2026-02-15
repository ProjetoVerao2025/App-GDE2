import React, { memo, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, useWindowDimensions, Image, Pressable} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { emailValidator, passwordValidator } from '../../core/utils';
import TextInput from '../../components/Textinput';
import { Link, useRouter } from 'expo-router';
import Button from '../../components/Button';
import { DefaultTheme, Button as PaperButton } from 'react-native-paper';

// export type Navigation = {
//   navigate: (scene: string) => void;
// };

// type Props = {
//   navigation: Navigation;
// };

export default function Login() {
    const {width} = useWindowDimensions();
    const router = useRouter()
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const LoginCheck = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError) {
        setEmail({ ...email, error: emailError });
        setPassword({ ...password, error: passwordError });
        return;
        }
        // navigation.navigate('/');
        router.replace("/") // ou router.push("/")
    };
    return(
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <Image 
                    source={require("../../assets/ohayo.jpg")}
                    resizeMode="contain"
                    style = {styles.image}
                    />
                    <View style={styles.row}>
                        <Text style={styles.welcome}>Welcome Back!!!</Text>
                    </View>
                    <View style={styles.container}>
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
                        <View>
                            <Link href="/new_password" asChild>
                                <Pressable hitSlop={10}>
                                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <Button mode="contained" onPress={LoginCheck}>
                            Login
                        </Button>
                        {/* <View style={styles.button}>
                            <Link href="/" asChild>
                                <Pressable hitSlop={10}>
                                    <Text style={styles.text}>Login</Text>
                                </Pressable>
                            </Link>
                        </View> */}
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
    welcome: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10
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
    forgotPassword: {
        alignSelf: "flex-end"
    },
})