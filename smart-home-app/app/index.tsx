import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { Switch } from "react-native";
import React, {useState} from 'react';
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';


const PlaceholderImage = require('../assets/images/donald-pdp.jpeg');

export default function App() {
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const [isEnabled1, setIsEnabled1] = useState(false);
   const toggleSwitch1 = () => setIsEnabled1(previousState1 => !previousState1);
  return (
    <View style= {{flex: 1,backgroundColor: 'white'}}>
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
              {isEnabled === true ? <LinearGradient start={[0, 0.5]} end={[1, 0.5]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}>
                    <Text style={{color: "white"}}>💡{"\n"}Lighting</Text>
                    <Switch style={{marginLeft: "20%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
                    <Text style={{color: "white"}}>⚡Energy 16.4</Text>
                    <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}>
                      <Link href={"/lighting"}>
                        <Text style={{color: 'blue'}}>{"Change Brightness"}</Text>
                      </Link>
                    </View>
                    <View style = {{marginBottom:"5%"}}>
                      {isEnabled === true ? <Text style={{color: "white"}}>{"On"}</Text>: null}
                    </View>
                </View>
              </LinearGradient>: null}
              {isEnabled === false ?
                <View style ={styles.square1}>
                <Text style={{color: "blue"}}>💡{"\n"}Lighting</Text>
                <Switch style={{marginLeft: "20%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
                <Text style={{color: "blue"}}>⚡Energy 16.4</Text>
                <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                <View style = {{marginBottom:"5%"}}>
                  {isEnabled === false ? <Text style={{color: "blue"}}>{"Off"}</Text>: null}
                </View>
            </View> : null}
              {isEnabled1 === true ? <LinearGradient start={[0, 0.5]} end={[1, 0.5]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}>
                    <Text style={{color: "white"}}>♨️ {"\n"} Microwave</Text>
                    <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch1} value={isEnabled1}  />
                    <View style = {{marginTop:"40%"}}>
                      {isEnabled1 === true ? <Text style={{color: "white"}}>{"On"}</Text> : null}
                    </View>
                </View>
              </LinearGradient>: null}
              {isEnabled1 === false ? 
                <View style ={styles.square1}>
                    <Text style={{color: "blue"}}>♨️ {"\n"} Microwave</Text>
                    <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch1} value={isEnabled1}  />
                    <View style = {{marginTop:"40%"}}>
                      {isEnabled1 === false ? <Text style={{color: "blue"}}>{"Off"}</Text> : null}
                    </View>
                </View>: null}

            </View>


            <View style={{flexDirection: 'row',marginLeft: 15}}>
              <LinearGradient start={[0, 0.5]} end={[1, 0.5]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}><Text>{"3"}</Text></View>
              </LinearGradient>
              <LinearGradient start={[0, 0.5]} end={[1, 0.5]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}><Text>{"4"}</Text></View>
              </LinearGradient>
            </View>
            <View style={{flexDirection: 'row',marginLeft: 15}}>
            <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}>
                  <Text>{"5"}</Text>
                </View>
              </LinearGradient>
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
      borderWidth: 1,
      borderRadius: 11,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  gradient:{
      marginLeft : 20,
      marginTop: 20,
      borderRadius: 11
  },
  square1: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 11,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft : 20,
    marginTop: 20,
  },
});
