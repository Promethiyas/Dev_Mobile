import { StyleSheet, Text, View,Image,TouchableOpacity,Alert, Switch} from 'react-native';
import React, {  useState, useEffect } from 'react';
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
export default function Lightning(){
  const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const white = require('../ressources/ampoule.png');
  const purple = require('../ressources/ampoulepurple.png');
  const blue = require('../ressources/ampoulebleu.png')
  const green = require('../ressources/ampouleverte.png')
  const red = require('../ressources/ampoulerouge.png')
  const ampoule = { white, purple, blue, green, red }

  const [selected, setSelected] = useState(ampoule.white)
  return (
    <View style= {{flex: 1,backgroundColor: '#0D2639'}}>
      <View style= {{flexDirection:"row"}}>
        <Link href="/"><Text style={{color:"white", fontSize:25}}>{"< Lighting"}</Text></Link>
        <Text style={{marginLeft: "40%", fontWeight: "bold", fontSize: 22, color: "brown"}}>{"Lighting"}</Text>
      </View> 
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
      {isEnabled === true ? <View style={{ position: 'absolute', elevation: 20, shadowColor: 'red', height: 180, width: 150 }}></View>: null}
        <Image source={selected} style={{height:200, width:150}}/>
      </View>
       <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
        <View style={styles.square}>
          <Text style={{color:"white"}}>{"💡 Lighting"}</Text>
          <Switch style={{marginTop:"5%",marginRight:"50%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </LinearGradient>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, padding: "5%", borderRadius: 11,backgroundColor: "white",height:"15%"}}>
        <Text>Light Color</Text>
        <View style={{flexDirection: "row"}}>
          <View style={{marginTop:"5%",marginLeft:"10%"}}><TouchableOpacity onPress={() => setSelected(ampoule.red)} style={{backgroundColor:"red", borderRadius:100, height:30,width:30,borderWidth:1}}></TouchableOpacity></View>
          <View style={{marginTop:"5%",marginLeft:"10%"}}><TouchableOpacity onPress={() => setSelected(ampoule.green)} style={{backgroundColor:"green", borderRadius:100, height:30,width:30,borderWidth:1}}></TouchableOpacity></View>
          <View style={{marginTop:"5%",marginLeft:"10%"}}><TouchableOpacity onPress={() => setSelected(ampoule.white)} style={{backgroundColor:"white", borderRadius:100, height:30,width:30,borderWidth:1}}></TouchableOpacity></View>
          <View style={{marginTop:"5%",marginLeft:"10%"}}><TouchableOpacity onPress={() => setSelected(ampoule.blue)} style={{backgroundColor:"blue", borderRadius:100, height:30,width:30,borderWidth:1}}></TouchableOpacity></View>
          <View style={{marginTop:"5%",marginLeft:"10%"}}><TouchableOpacity onPress={() => setSelected(ampoule.purple)} style={{backgroundColor:"purple", borderRadius:100, height:30,width:30,borderWidth:1}}></TouchableOpacity></View>
        </View>
      </View>     
    </View>
  )
}


const styles = StyleSheet.create({
 square: {
      //borderWidth: 1,
      borderRadius: 11,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: "5%",
      marginBottom:"40%"
    },
    gradient:{
      borderRadius: 20,
      marginLeft:20,
      marginBottom:"35%",
      marginRight:"50%",
      width:150,
      height:75
  },
  elevationLow: {
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    marginTop:"5%",
    marginLeft:"10%",
    backgroundColor: 'red'
  },
});