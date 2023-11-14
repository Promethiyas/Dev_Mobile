import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { Switch } from "react-native";
import React, {useState} from 'react';
import { Link } from "expo-router";



const PlaceholderImage = require('../assets/images/donald-pdp.jpeg');

export default function App() {
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const [isEnabled1, setIsEnabled1] = useState(false);
   const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  return (
    <View style= {{flex: 1,backgroundColor: '#F5F5DC'}}>
        <Text>          </Text>
        <View  style={styles.parent}>
            <Image source={PlaceholderImage} style={styles.image} />
            <View style = {{marginTop: 15}}>
              <Text style={styles.text}>  Hi Donald</Text>
              <Text style={{fontStyle: 'italic'}}>  Have a good day!</Text>
              <Text style={{fontSize:12, fontWeight:'bold'}}>☀️ Sunday</Text>
              <Text style={{fontSize:12, fontWeight:'bold'}}> 12 °C</Text>
            </View>
        </View>
        <View>
            <Text style={{marginLeft: "40%", fontWeight: "bold", fontSize: 22, color: "brown"}}>{"Living Room"}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 15}}>
              <View style ={styles.square}>
                <Text>💡{"\n"}Lighting</Text>
                <Switch style={{marginLeft: "20%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
                <Text>⚡Energy 16.4</Text>
                <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}>
                  <Link href={"/lighting"}>
                    <Text style={{color: 'blue'}}>{"Change Brightness"}</Text>
                  </Link>
                </View>
              </View>
              <View style ={styles.square}>
                <Text>♨️ {"\n"} Microwave</Text>
                <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch1} value={isEnabled1} />
              </View>
            </View>
            <View style={{flexDirection: 'row',marginLeft: 15}}>
              <View style ={styles.square}><Text>{"2"}</Text></View>
              <View style ={styles.square}><Text>{"3"}</Text></View>
            </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flexDirection:'row', 
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 18,
    marginTop: 5,
    marginLeft: 5,

  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  },
  square: {
      width: 150,
      height: 150,
      borderWidth: 5,
      marginLeft : 20,
      marginTop: 20,
      backgroundColor: '#8BCEA2',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
});
