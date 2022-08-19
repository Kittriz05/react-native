import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function FlatDemo() {
   //key value must be string here
    const names =[
        {key:1,name:"Ankit"},
        {key:2,name:"Messi"},
        {key:3,name:"Ronaldo"},
        {key:4,name:"Dybala"},
    ];


  return (
   <FlatList 
   style= {styles.itemStyle}
   keyExtractor={(index)=> {  //external key extractor
           return index.key;
}}
horizontal   //for horizontally arranging lists and it is verticalby default
showsHorizontalScrollIndicator={false} //for not showing the indicator below the items 
// numColumns={2}  // for deciding number of columns like 2 columns showing parallely in vertical sitaution   
inverted   // showing list from bottom to top
data = {names}
           renderItem={(element)=>{    //mapping or rendering item 
            console.log(element.item.name) 
            return (
              <Text style={styles.textStyle}
              > {element.item.name}</Text>
              )
           }}   
   />
  )
}

const styles= StyleSheet.create({
    textStyle:{
        fontSize: 20,
        backgroundColor:"yellow",
        margin:20
    },
    itemStyle:{
     textAlign:"center",
     margin:20,
     padding:10
    }

});