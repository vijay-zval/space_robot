import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import Footer from '../footer/footer';

const Home = (props) => {
    const [selectedColumn, setSelectedColumn] = useState('Day');
    const columnName = ['Day', 'Week', 'Month', 'Year', 'All']

    return (
        <View>
            <LinearGradient
                colors={['#22223C', '#A8278C']}
                start={{ x: 2, y: 0.95 }}
                style={{ height: '100%', width: '100%' }}
            >
                <View style={styles.contentArea}>
                    <Text style={styles.title}>Bot History</Text>
                    <View style={styles.timeColumn}>
                        {columnName ? columnName.map((val, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.9} key={index} onPress={() => setSelectedColumn(val)}>
                                    {selectedColumn == val ?
                                        <LinearGradient
                                            colors={['#22223C', '#A8278C']}
                                            start={{ x: 2, y: 0.95 }}
                                            style={{ borderRadius: 50 }}
                                        ><Text style={styles.selectedColumn}>{val}</Text>
                                        </LinearGradient> :
                                        <Text style={styles.unSelectedColumn}>{val}</Text>}
                                </TouchableOpacity>
                            )
                        }) : null}
                    </View>
                    <View style={styles.body}>

                    </View>
                    {/* <Footer /> */}
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    contentArea: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#fcfcfc',
        top: '35%',
        height: '100%',
        width: '100%',
        paddingTop: '5%'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    timeColumn: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '3%',
        height: 40,
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderRadius: 50,
        backgroundColor: 'white',
        elevation: 7
    },
    selectedColumn: {
        color: 'white',
        paddingHorizontal: '3%',
        paddingVertical: '1%',
    },
    unSelectedColumn: {
        color: 'black',
    },
    body: {
        height: '42%',
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
        backgroundColor: 'white',
        borderTopRightRadius: 25,
        elevation: 10
    }

});

export default Home;