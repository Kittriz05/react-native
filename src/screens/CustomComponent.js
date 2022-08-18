//import libraries to create components
import React from "react"
import {Text ,View, StyleSheet} from "react-native"

//create a component that return some jsx / simple function
const CustomComponent = ()=>{
    const name = "ankit"
 return (

    <View>
   <Text
   style={styles.textStyle1}
   >Welcome to Multiverse</Text>
    <Text
   style={styles.textStyle2}
   >We love Scarlet Witch</Text>
    <Text
   style={styles.textStyle3}
   >My name is {name} </Text>
   </View>
 )
};


// create a StyleSheet to style the component 

const styles= StyleSheet.create ({
   textStyle1:{
     color:"blue", 
     fontSize: 40
   },
   textStyle2:{
    color:"green", 
    fontSize : 30
  },
  textStyle3:{
    color:"blue", 
  }

})



// export file 
export default CustomComponent;

