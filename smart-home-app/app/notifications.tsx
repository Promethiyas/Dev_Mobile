import { StyleSheet, Text, View,ScrollView, Image} from 'react-native';
import { Link } from "expo-router";
import React, {  useState, useEffect} from 'react';
import Axios from "axios";

const loupe = require('../ressources/loupe.png');
const menu = require('../ressources/menu.png');

export default function notifications(){
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    const products = data;
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <View style= {{flex: 1,backgroundColor: '#FFFAFA'}}>
      <Text style={{marginLeft: "40%", fontWeight: "bold", fontSize: 22, color: "brown"}}>{"Notifications"}</Text>
      <View style={{flex: 1}}>
          <ScrollView>
            <View style={{flexDirection: 'row'}}>
              <Image source={loupe}/>
              <Text>                                                                                          </Text>
              <View style={{marginTop: '3%', backgroundColor: 'white', borderColor: 'white' ,borderRadius: 25}}>
                <Image source={menu}  />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style= {{marginLeft: '10%', color: '#FFFAFA',}}>{"\n\rAll Notification"}</Text>
              <Text style= {{marginLeft: '12%', color: '#FFFAFA'}}>{"\n\rUnread"}</Text>
              <Text style= {{marginLeft: '12%', color: '#FFFAFA'}}>{"\n\rReminder"}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style= {{marginLeft: '10%', color: '#1C4C9E', textDecorationLine: 'underline'}}>{"\n\rAll Notification"}</Text>
              <Text style= {{marginLeft: '12%', color: 'grey'}}>{"\n\rUnread"}</Text>
              <Text style= {{marginLeft: '12%', color: 'grey'}}>{"\n\rReminder"}</Text>
            </View>
            {products.map((product) => (
              <View style= {{borderWidth: 2, borderColor: 'black', marginTop: '5%', borderRadius: 20}}>
                <Text style={{textAlign: 'center'}}>{product.title}</Text>
              </View>
            ))}
          </ScrollView>
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