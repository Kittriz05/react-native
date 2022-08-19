// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>LOUDE</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


//import libraries to create components
 import React from "react"
 import {Text ,View, StyleSheet} from "react-native";
import ButtonDemo from "./src/screens/ButtonDemo";
import CustomComponent from './src/screens/CustomComponent'
import Example from "./src/screens/Example";
import FlatDemo from "./src/screens/FlatDemo";
import Images from "./src/screens/Images";


 //create a component that return some jsx / simple function
 const App = ()=>{
  return (

   <View> 
    <Text
    style={styles.textStyle}
    >FUTSAL DATA</Text>
    {/* <CustomComponent />*/}
    {/* <FlatDemo />  */}
    {/* <Example /> */}
    {/* <Images /> */}
    <ButtonDemo />
    </View>
  )
 };


 // create a StyleSheet to style the component 

 const styles= StyleSheet.create ({
    textStyle:{
      color:"red",
    }
 })


 // export file 
 export default App;

