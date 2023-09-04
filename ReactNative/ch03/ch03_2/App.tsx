import React from 'react';
import {StyleSheet, Dimensions, SafeAreaView, Text, Platform, View} from 'react-native'
import {MD2Colors} from 'react-native-paper' 

const {width, height} = Dimensions.get('window')

export default function App(){
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width} px</Text>
      <Text style={[styles.text]}>height: {height} px</Text>

      <View style={[styles.box, styles.border]}></View>
      <View style={[styles.box, styles.border, {borderRadius: 20}]}></View>
      <View style={[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]}></View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: MD2Colors.blue500, flex: 1, paddingLeft: Platform.select({ios: 0, android: 20})},
  text: {fontSize: 20, color: MD2Colors.blue200},
  box: {height: 100, backgroundColor: MD2Colors.lime500, marginBottom: 10, marginLeft: Platform.select({ios: 20, android: 0})},
  border: {borderWidth: 10, borderColor: MD2Colors.blue900},
})
