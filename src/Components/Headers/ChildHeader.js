import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default function ChildHeader({ navigation, title }) {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor="#fff" barStyle='dark-content' translucent={true} />

        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image style={{width:27 , height:27, marginRight:10}} source={require('../../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            {/* Left side - Title */}
            <View style={styles.leftContainer}>
                <Text style={styles.appName}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#fff',
        height: 90,
        paddingHorizontal: 15,
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0', 
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    appName: {
        fontSize: 20,
        color: '#292929',
    }
});
