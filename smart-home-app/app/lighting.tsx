import { StyleSheet, Text, View,Image} from 'react-native';
import { Link } from "expo-router";

export default function Lightning(){
  return (
    <View style= {{flex: 1,backgroundColor: '#0D2639'}}>
      <View style= {{flexDirection:"row"}}>
        <Link href="/"><Text style={{color:"white", marginLeft:"5%", fontSize:25}}>{"< Lighting"}</Text></Link>
        <Text style={{marginLeft: "40%", fontWeight: "bold", fontSize: 22, color: "brown"}}>{"Lighting"}</Text>
      </View>
      <View>
        <Image source={require('../ressources/ampoule.png')}></Image>
      </View>
    </View>
  )
}





const styles = StyleSheet.create({
  footerlink:{
    fontSize:26,
  },
  footerview:{
    marginLeft:"12%"
  }

});