import { View, Text,StyleSheet, Button, Alert } from 'react-native'
import React from 'react'

const ButtonDemo = () => {
  return (
    <View>
      <Text>ButtonDemo</Text>
      <Button
      style={styles.buttonStyle}
      title="PRESS"
      disabled
      onPress={()=>{
        console.log("Pressed")
        Alert.alert("Button Pressed")
      }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    buttonStyle:{
        color:"red",
        fontSize:30,

    }
})



export default ButtonDemo