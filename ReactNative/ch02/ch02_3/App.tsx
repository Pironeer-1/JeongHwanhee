import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import ClassComponent from './src/screens/ClassComponent'
import ArrowComponent from './src/screens/ArrowComponent'
import Person from './src/screens/Person'
import * as D from './src/data'

const person = D.CreateRandomPerson()
const people = D.makeArray(100).map(D.CreateRandomPerson)

export default function App() {
  const children = people.map((person) => {
    <Person key={person.id} person={person}></Person>
  })
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  )
}