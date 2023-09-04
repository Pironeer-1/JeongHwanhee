import React from 'react';
import {StyleSheet, Dimensions, SafeAreaView, Text, Platform} from 'react-native'
import {MD2Colors} from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const {width, height} = Dimensions.get('window')

export default function App(){
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width} px</Text>
      <Text style={[styles.text]}>height: {height} px</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: MD2Colors.blue500, height},
  text: {fontSize: 20, color: MD2Colors.blue200}
})
