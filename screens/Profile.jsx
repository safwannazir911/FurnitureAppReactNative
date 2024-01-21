import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import image from "../assets/images/bk.png"
import styles from './profile.style'
const Profile = () => {
  return (
    <SafeAreaView>
      <Image source={image} style={styles.searchImage}/>
    </SafeAreaView>
  )
}

export default Profile

