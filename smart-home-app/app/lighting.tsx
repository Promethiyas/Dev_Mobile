import { StyleSheet, Text, View,Image,TouchableOpacity,Alert, Switch} from 'react-native';
import React, {  useState, useEffect } from 'react';
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from "react-native-svg"
import { useFonts } from 'expo-font';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Asyncstorage: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const whiteAsset = require('../ressources/ampouleallume.png');
const whiteInActiveAsset = require('../ressources/ampoule.png')
const purpleAsset = require('../ressources/ampouleallumeViolet.png');
const blueAsset = require('../ressources/ampouleallumebleu.png')
const greenAsset = require('../ressources/ampouleallumeVert.png')
const redAsset = require('../ressources/ampouleallumeRouge.png')
const barrefond = require('../ressources/barre.png')



const ampoule = { 
  white: {
  inactiveAsset: whiteInActiveAsset,
  activeAsset: whiteAsset,
}, purple: {
  inactiveAsset: whiteInActiveAsset,
  activeAsset: purpleAsset,
}, blue: {
  inactiveAsset: whiteInActiveAsset,
  activeAsset: blueAsset,
}, green: {
  inactiveAsset: whiteInActiveAsset,
  activeAsset: greenAsset,
}, red: {
  inactiveAsset: whiteInActiveAsset,
  activeAsset: redAsset,
} }


export default function Lightning(){
  const [fontsLoaded] = useFonts({
    'iransans': require('../ressources/FontsFree-Net-ir_sans.ttf'),
  });
  const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  

  const [selected, setSelected] = useState(ampoule.white)
  return (
    //#0D2639
    <View style= {{flex: 1,backgroundColor: '#0D2639'}}> 
      <View style={{ position:'absolute',  marginTop:'50%', marginLeft:'80%'}}>
        <Image source={barrefond} />
      </View>
      <View style= {{flexDirection:"row", marginLeft: '10%', marginTop: '5%'}}>
        <Link href="/"><Text style={{color:"white", fontSize:25,fontFamily: 'iransans', fontWeight:'bold'}}>{"< Lighting"}</Text></Link>
      </View> 
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
        {isEnabled === true ? 
          <Image source={selected.activeAsset} style={{height:500, width:375}}/> 
        : null}
        {isEnabled === false ? 
          <Image source={selected.inactiveAsset} style={{height:400, width:300, marginTop: '20%'}}/> 
        : null}
      </View>
      <View style={{flexDirection: 'row'}}>
        <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
          <View style={styles.square}>
            <View>
              <Svg width={24}height={24} viewBox="0 0 24 24" fill={'white'}>
                <Path d="M4.32002 9.83438H1.41565V11.3344H4.32002V9.83438Z"/>
                <Path d="M22.5844 9.83438H19.6801V11.3344H22.5844V9.83438Z"/>
                <Path d="M4.97521 2.49754L3.91455 3.5582L6.02924 5.67289L7.0899 4.61223L4.97521 2.49754Z"/>
                <Path d="M12.75 0H11.25V2.90438H12.75V0Z"/>
                <Path d="M19.0247 2.49894L16.91 4.61363L17.9707 5.67429L20.0854 3.5596L19.0247 2.49894Z"/>
                <Path d="M6.02961 15.4931L3.91492 17.6078L4.97558 18.6684L7.09027 16.5537L6.02961 15.4931Z"/>
                <Path d="M17.9712 15.4945L16.9105 16.5551L19.0252 18.6698L20.0859 17.6092L17.9712 15.4945Z"/>
                <Path d="M8.82935 20.8294C8.82935 21.2457 8.91136 21.658 9.0707 22.0427C9.23003 22.4274 9.46358 22.7769 9.758 23.0713C10.0524 23.3658 10.4019 23.5993 10.7866 23.7587C11.1713 23.918 11.5836 24 12 24C12.4163 24 12.8286 23.918 13.2133 23.7587C13.598 23.5993 13.9475 23.3658 14.2419 23.0713C14.5364 22.7769 14.7699 22.4274 14.9292 22.0427C15.0886 21.658 15.1706 21.2457 15.1706 20.8294V18.75H8.82935V20.8294Z"/>
                <Path d="M15.1706 17.9794C15.1662 17.475 15.2682 16.9755 15.4698 16.5132C15.6713 16.0509 15.9681 15.6362 16.3406 15.2962C17.3246 14.4173 18.0187 13.2605 18.3311 11.9786C18.6435 10.6967 18.5595 9.35025 18.0902 8.11715C17.6209 6.88405 16.7884 5.82242 15.7028 5.07262C14.6172 4.32282 13.3296 3.92016 12.0102 3.91789C10.6908 3.91561 9.4018 4.31383 8.3136 5.05988C7.2254 5.80593 6.38925 6.86468 5.9157 8.09616C5.44216 9.32763 5.35352 10.6738 5.6615 11.9568C5.96949 13.2397 6.6596 14.3989 7.64058 15.2812C8.01663 15.6226 8.31677 16.0392 8.52155 16.504C8.72633 16.9688 8.83119 17.4715 8.82933 17.9794V18H15.1706V17.9794Z"/>
              </Svg>
            </View>
            <Text style={{color:"white", fontFamily:'iransans'}}>{"   Lighting"}</Text>
            <Switch style={{position:'absolute', marginLeft:'30%', marginTop:'20%'}} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
            <View style = {{position: 'absolute', marginTop: '15%', marginLeft: '75%', opacity: 0.1}}>
              <Svg width={48}height={48} viewBox="0 0 24 24" fill={'white'}>
                <Path d="M4.32002 9.83438H1.41565V11.3344H4.32002V9.83438Z"/>
                <Path d="M22.5844 9.83438H19.6801V11.3344H22.5844V9.83438Z"/>
                <Path d="M4.97521 2.49754L3.91455 3.5582L6.02924 5.67289L7.0899 4.61223L4.97521 2.49754Z"/>
                <Path d="M12.75 0H11.25V2.90438H12.75V0Z"/>
                <Path d="M19.0247 2.49894L16.91 4.61363L17.9707 5.67429L20.0854 3.5596L19.0247 2.49894Z"/>
                <Path d="M6.02961 15.4931L3.91492 17.6078L4.97558 18.6684L7.09027 16.5537L6.02961 15.4931Z"/>
                <Path d="M17.9712 15.4945L16.9105 16.5551L19.0252 18.6698L20.0859 17.6092L17.9712 15.4945Z"/>
                <Path d="M8.82935 20.8294C8.82935 21.2457 8.91136 21.658 9.0707 22.0427C9.23003 22.4274 9.46358 22.7769 9.758 23.0713C10.0524 23.3658 10.4019 23.5993 10.7866 23.7587C11.1713 23.918 11.5836 24 12 24C12.4163 24 12.8286 23.918 13.2133 23.7587C13.598 23.5993 13.9475 23.3658 14.2419 23.0713C14.5364 22.7769 14.7699 22.4274 14.9292 22.0427C15.0886 21.658 15.1706 21.2457 15.1706 20.8294V18.75H8.82935V20.8294Z"/>
                <Path d="M15.1706 17.9794C15.1662 17.475 15.2682 16.9755 15.4698 16.5132C15.6713 16.0509 15.9681 15.6362 16.3406 15.2962C17.3246 14.4173 18.0187 13.2605 18.3311 11.9786C18.6435 10.6967 18.5595 9.35025 18.0902 8.11715C17.6209 6.88405 16.7884 5.82242 15.7028 5.07262C14.6172 4.32282 13.3296 3.92016 12.0102 3.91789C10.6908 3.91561 9.4018 4.31383 8.3136 5.05988C7.2254 5.80593 6.38925 6.86468 5.9157 8.09616C5.44216 9.32763 5.35352 10.6738 5.6615 11.9568C5.96949 13.2397 6.6596 14.3989 7.64058 15.2812C8.01663 15.6226 8.31677 16.0392 8.52155 16.504C8.72633 16.9688 8.83119 17.4715 8.82933 17.9794V18H15.1706V17.9794Z"/>
              </Svg>
            </View>
          </View>
        </LinearGradient>
        {isEnabled === true ? 
        <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#1C4C9E', '#00F0FF']} style={styles.gradient}>
          <View style={styles.square1}>
            <Text style={{color:"white", fontFamily:'iransans'}}>{"Energy 16.4"}</Text>
            <Text style={{color:"white", fontFamily:'iransans', fontSize:10}}>{"Limit 20"}</Text>
            <View style = {{position: 'absolute', marginTop: '10%', marginLeft: '70%', opacity: 0.1}}>
              <Svg width={55}height={55} viewBox="0 0 50 63" fill={'white'}>
                <Path d="M45.5682 44.6285L9.87107 62.1667C9.32065 62.4336 8.71301 62.5535 8.10715 62.515C7.5013 62.4764 6.91782 62.2806 6.41338 61.9466C6.10952 61.8189 5.82804 61.6439 5.57915 61.4278C5.0576 60.8418 4.7483 60.0941 4.70058 59.3039C4.65286 58.5138 4.86945 57.7266 5.31583 57.0678L16.6067 38.9123L4.15296 31.1673C3.08613 30.504 2.21969 29.5621 1.64409 28.4398C1.06848 27.3175 0.804823 26.056 0.880635 24.787C0.956447 23.518 1.36895 22.288 2.07508 21.2255C2.78121 20.1629 3.75507 19.3067 4.895 18.7464L40.5921 1.20817C41.2926 0.826692 42.097 0.692128 42.8757 0.826178C43.6543 0.960228 44.3618 1.35508 44.884 1.94705C45.4056 2.53306 45.7148 3.28073 45.7626 4.07091C45.8103 4.86108 45.5937 5.64828 45.1473 6.30704L33.8564 24.4625L46.3102 32.2076C47.377 32.8708 48.2435 33.8127 48.8191 34.935C49.3947 36.0573 49.6583 37.3188 49.5825 38.5878C49.5067 39.8568 49.0942 41.0868 48.3881 42.1494C47.6819 43.2119 46.7081 44.0681 45.5682 44.6285Z"/>
              </Svg>
            </View>
          </View>
        </LinearGradient>
        : null}
      </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, padding: "5%", borderRadius: 11,backgroundColor: "white",height:"15%"}}>
        <Text style={{fontFamily:'iransans'}}>Light Color</Text>
        <View style={{flexDirection: "row"}}>
          <View style={{marginTop:"5%",marginLeft:"10%"}}>
            <TouchableOpacity onPress={() => setSelected(ampoule.red)} style={{backgroundColor:"red", borderRadius:100, height:30,width:30,borderWidth:1}}>
            </TouchableOpacity>
          </View>
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
      marginBottom:"40%",
    },
    square1: {
      //borderWidth: 1,
      borderRadius: 11,
      flexWrap: 'wrap',
      padding: "5%",
      //marginBottom:"40%"
      
    },
    gradient:{
      borderRadius: 20,
      marginLeft:20,
      marginBottom:"35%",
      marginRight:"7%",
      width:150,
      height:75,
  },  
});

