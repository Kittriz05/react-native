import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'

 const Example=()=> {
    const names=[
        {key:1,name:"Ankit Dhakal",position:"FIXO" },
        {key:2,name:"Nikhil Thapa",position:"FIXO" },
        {key:3,name:"Rabin Thapa" ,position:"ALA"},
        {key:4,name:"Seth Pariyar" ,position:"PIVOT"},
        {key:5,name:"Alexis Subedi" ,position:"GK"} ,
        {key:6,name:"Dabeeg Rana" ,position:"ALA"},
        {key:7,name:"Bishal Budhathoki" ,position:"ALA"},
        {key:8,name:"Sushant Thapa" ,position:"FIXO"},


    ];
  return (
   
    <FlatList
    style={styles.itemStyle}
    keyExtractor={(index)=> {  //external key extractor
        return index.key;
}}
horizontal
showsHorizontalScrollIndicator={false}
    data={names}
    renderItem={({item})=>{
        return (
            <View style= {styles.viewStyle}>
        <Text style= {styles.textStyle}>Name:{item.name}</Text>
        <Text style= {styles.textStyle}>Position:{item.position}</Text>
             
        </View>
        )
    }}
    />


    
  )
}
const styles= StyleSheet.create({
    textStyle:{
        fontSize: 20,
        backgroundColor:"skyblue",
        color:"white"
    },
    itemStyle:{
     textAlign:"center",
    margin:20,
    padding:5
    
    },
    viewStyle:{
        margin:20,
        padding:5,
    }

});


export default Example;