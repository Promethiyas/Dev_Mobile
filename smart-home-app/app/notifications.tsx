import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { Link } from "expo-router";
import React, {  useState, useEffect} from 'react';
import Axios from "axios";

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