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
   const [isEnabled2, setIsEnabled2] = useState(false);
   const toggleSwitch2 = () => setIsEnabled2(previousState2 => !previousState2);
   const [isEnabled3, setIsEnabled3] = useState(false);
   const toggleSwitch3 = () => setIsEnabled3(previousState3 => !previousState3);
   const [isEnabled4, setIsEnabled4] = useState(false);
   const toggleSwitch4 = () => setIsEnabled4(previousState4 => !previousState4);
  return (
    <View style= {{flex: 1,backgroundColor: '#FFFAFA'}}>
        <Text>          </Text>
        <View  style={styles.parent}>
            <Image source={PlaceholderImage} style={styles.image} />
            <View style = {{marginTop: 10}}>
              <Text style={styles.text}>  Hi Donald</Text>
              <Text style={{fontStyle: 'italic'}}>  Have a good day!</Text>
              <Text style={{fontSize:12, fontWeight:'bold'}}>☀️ Sunday</Text>
              <Text style={{fontSize:12, fontWeight:'bold'}}> 12 °C</Text>
            </View>
        </View>
        <View>
            <Text style={{marginLeft: "40%", fontWeight: "bold", fontSize: 22, color: "brown"}}>{"Living Room"}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 15}}>
              {isEnabled === true ? <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
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
                <Text style={{color: "blue"}}>⚡Energy 0</Text>
                <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                <View style = {{marginBottom:"5%"}}>
                  {isEnabled === false ? <Text style={{color: "blue"}}>{"Off"}</Text>: null}
                </View>
            </View> : null}
              {isEnabled1 === true ? <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}>
                    <Text style={{color: "white"}}>♨️ {"\n"} Microwave</Text>
                    <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch1} value={isEnabled1}  />
                    <Text style={{color: "white"}}>⚡Energy 7.2</Text>
                    <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                    <View>
                      {isEnabled1 === true ? <Text style={{color: "white"}}>{"On"}</Text> : null}
                    </View>
                </View>
              </LinearGradient>: null}
              {isEnabled1 === false ? 
                <View style ={styles.square1}>
                    <Text style={{color: "blue"}}>♨️ {"\n"} Microwave</Text>
                    <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch1} value={isEnabled1}  />
                    <Text style={{color: "blue"}}>⚡Energy 0</Text>
                    <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                    <View>
                      {isEnabled1 === false ? <Text style={{color: "blue"}}>{"Off"}</Text> : null}
                    </View>
                </View>: null}

            </View>


            <View style={{flexDirection: 'row',marginLeft: 15}}>
            {isEnabled2 === true ? <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}>
                    <Text style={{color: "white"}}>✇ {"\n"}Ventilator</Text>
                    <Switch style={{marginLeft: "20%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch2} value={isEnabled2}  />
                    <Text style={{color: "white"}}>⚡Energy 2.8</Text>
                    <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                    <View>
                      {isEnabled2 === true ? <Text style={{color: "white"}}>{"On"}</Text> : null}
                    </View>
                </View>
              </LinearGradient>: null}
              {isEnabled2 === false ? 
                <View style ={styles.square1}>
                    <Text style={{color: "blue"}}>✇ {"\n"}Ventilator</Text>
                    <Switch style={{marginLeft: "20%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch2} value={isEnabled2}  />
                    <Text style={{color: "blue"}}>⚡Energy 0</Text>
                    <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                    <View>
                      {isEnabled2 === false ? <Text style={{color: "blue"}}>{"Off"}</Text> : null}
                    </View>
                </View>: null}



                {isEnabled3 === true ? <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}>
                    <Text style={{color: "white"}}>🍽️{"\n"}Dishwasher</Text>
                    <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch3} value={isEnabled3} />
                    <Text style={{color: "white"}}>⚡Energy 10.5</Text>
                    <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                    <View style = {{marginBottom:"5%"}}>
                      {isEnabled3 === true ? <Text style={{color: "white"}}>{"On"}</Text>: null}
                    </View>
                </View>
              </LinearGradient>: null}
              {isEnabled3 === false ?
                <View style ={styles.square1}>
                <Text style={{color: "blue"}}>🍽️{"\n"}Dishwasher</Text>
                <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch3} value={isEnabled3} />
                <Text style={{color: "blue"}}>⚡Energy 0</Text>
                <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                <View style = {{marginBottom:"5%"}}>
                  {isEnabled3 === false ? <Text style={{color: "blue"}}>{"Off"}</Text>: null}
                </View>
            </View> : null}



            </View>
            <View style={{flexDirection: 'row',marginLeft: 15}}>
            {isEnabled4 === true ? <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
                <View style ={styles.square}>
                    <Text style={{color: "white"}}>☕{"\n"}CofeeMaker</Text>
                    <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled4 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch4} value={isEnabled4} />
                    <Text style={{color: "white"}}>⚡Energy 4.6</Text>
                    <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                    <View style = {{marginBottom:"5%"}}>
                      {isEnabled4 === true ? <Text style={{color: "white"}}>{"On"}</Text>: null}
                    </View>
                </View>
              </LinearGradient>: null}
              {isEnabled4 === false ?
                <View style ={styles.square1}>
                <Text style={{color: "blue"}}>☕{"\n"}CofeeMaker</Text>
                <Switch style={{marginLeft: "10%"}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled4 ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch4} value={isEnabled4} />
                <Text style={{color: "blue"}}>⚡Energy 0</Text>
                <View style={{width: 180, height: 25, marginLeft: '2.5%', marginTop: '10%'}}></View>
                <View style = {{marginBottom:"5%"}}>
                  {isEnabled4 === false ? <Text style={{color: "blue"}}>{"Off"}</Text>: null}
                </View>
            </View> : null}
            </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, padding: "5%", borderRadius: 11, flexDirection: "row",backgroundColor: "white"}}>
            <View style={styles.footerview}>
              <Link href={"/"}><Text style={styles.footerlink}>🏠</Text></Link>
            </View>
            <View style={styles.footerview}>
              <Link href={"/scenario"}><Text style={styles.footerlink}>☀️</Text></Link>
            </View>
            <View style={styles.footerview}>
              <Link href={"/notifications"}><Text style={styles.footerlink}>🔔</Text></Link>
            </View>
            <View style={styles.footerview}>
              <Link href={"/user"}><Text style={styles.footerlink}>🪪</Text></Link>
            </View>
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
    borderRadius: 100,
    marginTop: 5,
    marginLeft: 5,

  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  },
  square: {
      width: 160,
      height: 160,
      //borderWidth: 1,
      borderRadius: 11,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: "5%"
    },
  gradient:{
      marginLeft : 20,
      marginTop: 20,
      borderRadius: 11
  },
  square1: {
    width: 160,
    height: 160,
    //borderWidth: 1,
    borderRadius: 11,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft : 20,
    marginTop: 20,
    backgroundColor: "white",
    paddingLeft: "5%"
  },
  footerlink:{
    fontSize:26,
  },
  footerview:{
    marginLeft:"12%"
  }

});
