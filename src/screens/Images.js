import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function Images() {
  return (
    <View>
      <Text>Images</Text>
      <Image
      style={styles.imgStyle}
      source={require("../../assets/Img1.jpg")}
      />
      <Image
      style={styles.imgStyle}
      source={require("../../assets/Img1.jpg")}
      />
      <Image
      style={styles.imgStyle}
      source={require("../../assets/Img1.jpg")}
      />
    </View>
  )
}


const styles= StyleSheet.create({
    imgStyle:{
        height:405,
        width:720,
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    }
})