import { StyleSheet, Text, View} from 'react-native';
import { Link } from "expo-router";

export default function Lightning(){
  return (
    <View style= {{flex: 1,backgroundColor: '#FFFAFA'}}>
      <Text style={{marginLeft: "40%", fontWeight: "bold", fontSize: 22, color: "brown"}}>{"Notifications"}</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Link href={"/"}><Text>{"Retour"}</Text></Link>
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