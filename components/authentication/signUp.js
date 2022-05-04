import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUp = (props) => {
    return (
        <View>
            <LinearGradient
                colors={['#22223C', '#A8278C']}
                start={{ x: 2, y: 0.95 }}
                style={{ height: '100%', width: '100%' }}
            >
                <View style={styles.contentArea}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput placeholder={"Name"} style={styles.inputBox}></TextInput>
                    <TextInput placeholder={"Email"} style={styles.inputBox}></TextInput>
                    <TextInput placeholder={"Password"} style={styles.inputBox}></TextInput>
                    <TextInput placeholder={"Referal Id (Optional)"} style={styles.inputBox}></TextInput>
                    <TouchableOpacity activeOpacity={0.9} style={styles.button}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.note}>
                        <Text style={styles.noteText1}>Already have an account ? </Text>
                        <Pressable onPress={() => props.navigation.navigate('login')}>
                            <Text style={styles.noteText2}>Login</Text>
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
        paddingTop: '13%'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    },
    inputBox: {
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
    note: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '6%'
    },
    signUpText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    button: {
        height: 60,
        width: '98%',
        backgroundColor: '#1F2125',
        borderRadius: 50,
        marginTop: '8%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

export default SignUp;