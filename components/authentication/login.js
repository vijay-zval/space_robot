import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Login = (props) => {
    return (
        <View>
            <LinearGradient
                colors={['#22223C', '#A8278C']}
                start={{ x: 2, y: 0.95 }}
                style={{ height: '100%', width: '100%' }}
            >
                <View style={styles.contentArea}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput placeholder={"Email"} style={styles.emailAndPassword}></TextInput>
                    <TextInput placeholder={"Password"} style={styles.emailAndPassword}></TextInput>
                    <View style={styles.note1}>
                        <Text style={styles.noteText1}>Forgotten you login details ?</Text>
                        <Text style={styles.noteText2}>Get help with signing in</Text>
                    </View>
                    <LinearGradient
                        colors={['#353535', '#000000', '#000000', '#333333']}
                        end={{ x: 0.02, y: 1.07 }}
                        style={styles.button}
                    >
                        <Pressable onPress={() => props.navigation.navigate('home')}>
                            <Text style={styles.loginText}>Login</Text>
                        </Pressable>
                    </LinearGradient>
                    <View style={styles.note2}>
                        <Text style={styles.noteText1}>Don't have an account ? </Text>
                        <Pressable onPress={() => props.navigation.navigate('signup')}>
                            <Text style={styles.noteText2}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    contentArea: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: 'white',
        top: '25%',
        height: '100%',
        width: '100%',
        padding: '4%',
        paddingTop: '15%'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    },
    emailAndPassword: {
        fontSize: 13,
        color: 'black',
        height: 60,
        width: '100%',
        backgroundColor: '#F2F2F3',
        borderRadius: 50,
        marginTop: '6%',
        textAlignVertical: 'center',
        paddingHorizontal: '8%',
        elevation: 5
    },
    note1: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '11%'
    },
    noteText1: {
        fontSize: 13,
        color: '#3E3E3E'
    },
    noteText2: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '1%'
    },
    note2: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '6%'
    },
    loginText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    button: {
        height: 60,
        width: '98%',
        borderRadius: 50,
        marginTop: '6%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

export default Login;