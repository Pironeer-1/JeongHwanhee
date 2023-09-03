import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function App(){
  const isLoading = true
  // if(isLoading){
  //   return (
  //     <SafeAreaView>
  //       <Text>Loading...</Text>
  //     </SafeAreaView>
  //   )
  // }
  // return (
  //   <SafeAreaView>
  //     {isLoading && <Text>Loading...</Text>}
  //     {isLoading && <Text>Hello JSX world~!</Text>}
  //     </SafeAreaView>
  // )
  const children = isLoading ? (
    <Text>Loading...</Text>
  ): (
    <Text>Hello JSX world~!</Text>
  )
  return <SafeAreaView>{children}</SafeAreaView>
  
}