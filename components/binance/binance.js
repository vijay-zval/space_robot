import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function Binance() {
    const [walletPrice, setWalletPrice] = useState('$ 50')
    const [selectPlan, setSelectPlan] = useState(true)
    const [binance, setBinance] = useState(false)
    const [APIkey, setAPIkey] = useState('')
    const [APIsecret, setAPIsecret] = useState('')
    const [position, setPosition] = useState(false)
    const [positionValue, setPositionValue] = useState("")
    return (
        <LinearGradient
            colors={['#22223C', '#A8278C']}
            start={{ x: 1, y: 1 }}
            style={style.headerGradient}
        >
            <View style={style.content}>
                {selectPlan ? <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={style.monthsCountContainer}>
                        <View style={style.containerContent}>
                            <View style={style.count}>
                                <Text style={style.noOfMonth}>3</Text>
                                <Text style={style.months}>months</Text>
                            </View>
                            <Text style={style.dollar}>$ 100</Text>
                        </View>
                        <View style={style.containerContent}>
                            <View style={style.save}>
                                <Text>Save 10%</Text>
                            </View>
                            <Text>$33.33 / month</Text>
                        </View>
                    </View>
                    <LinearGradient
                        colors={['#22223C', '#A8278C']}
                        start={{ x: 1, y: 1 }}
                        style={style.containerGradient}
                    >
                        <View >
                            <View style={style.containerContent}>
                                <View style={style.count}>
                                    <Text style={style.noOfMonthGradient}>6</Text>
                                    <Text style={style.monthsGradient}>months</Text>
                                </View>
                                <Text style={style.dollarGradient}>$ 175</Text>
                            </View>
                            <View style={style.containerContent}>
                                <View style={style.saveGradient}>
                                    <Text>Save 16%</Text>
                                </View>
                                <Text style={style.dollarPerMonth}>$33.3333 / month</Text>
                            </View>
                        </View>
                    </LinearGradient>
                    <View style={style.walletContainer}>
                        <View style={style.headingAndStar}>
                            <Text style={style.walletHeading}>Setup Wallet</Text>
                            <Text style={style.star}>*</Text>
                        </View>
                        <TextInput
                            style={style.input}
                            value={walletPrice}
                            onChangeText={setWalletPrice}
                            placeholder="$ 50"
                            placeholderTextColor={'#5B5A5A'}
                            placeholderFontSize={36}
                            keyboardType="numeric"
                        />
                        <Text style={style.note}>*it is advisable to add atleast $50 to wallet money for smooth investment.</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setSelectPlan(false); setBinance(true) }} activeOpacity={0.7} style={style.button}>
                        <Text style={style.buttonText}>Start Subscription </Text>
                    </TouchableOpacity>
                </ScrollView> : null}
                {!selectPlan && binance ? <View style={style.binanceContainer}>
                    <Text style={style.heading}>Input Binance API Key</Text>
                    <TextInput
                        style={style.input}
                        value={APIkey}
                        onChangeText={setAPIkey}
                    />
                    <Text style={style.heading}>Input Secret Key</Text>
                    <TextInput
                        style={style.input}
                        value={APIsecret}
                        onChangeText={setAPIsecret}
                    />
                    <TouchableOpacity onPress={() => { setBinance(false); setPosition(true) }} activeOpacity={0.7} style={style.Button}>
                        <Text style={style.buttonText}>Connect </Text>
                    </TouchableOpacity>
                </View> : null}
                {!selectPlan && !binance && position ? <View style={style.positionContainer}>
                    <Text style={style.heading}>Set Position</Text>
                    <TextInput
                        style={style.input}
                        value={positionValue}
                        onChangeText={setPositionValue}
                    />
                    <Text style={style.positionNote}>*it is advisable to set position of  0.2% of  wallet money for smooth investment </Text>
                    <TouchableOpacity activeOpacity={0.7} style={style.Button}>
                        <Text style={style.buttonText}>Set Position </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={style.laterContainer}>
                        <Text>I will do it later</Text>
                        <AntDesign style={style.arrow} name="arrowright" size={15} color="black" />
                    </TouchableOpacity>
                </View> : null}
            </View>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    headerGradient: {
        height: "100%",
        width: '100%'
    },
    content: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#f5f5f5',
        top: '30%',
        height: '100%',
        width: '100%',
        padding: '4%',
        paddingTop: '15%'
    },
    monthsCountContainer: {
        backgroundColor: 'white',
        height: 120,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 15,
        elevation: 10
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: '3%',
        alignItems: 'center'
    },
    count: {
        flexDirection: 'row',
    },
    noOfMonth: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "#1F2125"
    },
    noOfMonthGradient: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "white"
    },
    months: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#1F2125",
        paddingLeft: '2%',
        marginTop: '20%'
    },
    monthsGradient: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white",
        paddingLeft: '2%',
        marginTop: '20%'
    },
    save: {
        height: '110%',
        width: '25%',
        backgroundColor: '#C4C4C459',
        color: "#1F2125",
        borderRadius: 20,
        alignItems: 'center',
    },
    saveGradient: {
        height: '110%',
        width: '25%',
        backgroundColor: 'white',
        color: "#1F2125",
        borderRadius: 20,
        alignItems: 'center',
    },
    dollar: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#1F2125",
        paddingTop: '1%'
    },
    dollarGradient: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
        paddingTop: '1%'
    },
    containerGradient: {
        height: 120,
        width: '99%',
        borderRadius: 15,
        marginTop: '3%'
    },
    dollarPerMonth: {
        color: "white"
    },
    walletContainer: {
        backgroundColor: 'white',
        height: 150,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 15,
        elevation: 10,
        marginTop: '3%',
        padding: '5%'
    },
    headingAndStar: {
        flexDirection: 'row',
    },
    walletHeading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    star: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        marginLeft: '2%',
        marginTop: "-0.6%"
    },
    input: {
        height: 40,
        backgroundColor: '#F2F2F3',
        borderRadius: 10,
        padding: 10,
        marginTop: '2%'
    },
    note: {
        fontSize: 12,
        color: '#5B5A5A',
        width: '96%',
        alignSelf: 'center',
        marginTop: '2%',
    },
    positionNote: {
        fontSize: 12,
        color: '#5B5A5A',
        width: '96%',
        alignSelf: 'center',
        marginTop: '5%',
    },
    button: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 15,
        elevation: 10,
        marginTop: '4%',
    },
    Button: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 15,
        elevation: 10,
        marginTop: '10%',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    binanceContainer: {
        backgroundColor: 'white',
        height: 311,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 15,
        elevation: 10,
        marginTop: '4%',
        padding: '5%'
    },
    heading: {
        fontSize: 18,
        marginTop: '4%',
        marginBottom: '1%'
    },
    positionContainer: {
        backgroundColor: 'white',
        height: 311,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 15,
        elevation: 10,
        marginTop: '4%',
        padding: '5%'
    },
    laterContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '5%',
    },
    arrow: {
        alignSelf: 'center',
        marginTop: '0.9%',
        marginLeft: '1%'
    }
})