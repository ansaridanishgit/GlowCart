import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainHeader from '../../Components/Headers/MainHeader'

export default function Offers({ navigation }) {
  return (
    <View style={{flex:1}}>
      <MainHeader navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Offers</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})