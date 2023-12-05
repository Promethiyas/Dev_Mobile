import { StyleSheet, Text, View,ScrollView, Image} from 'react-native';
import { Link } from "expo-router";
import React, {  useState, useEffect} from 'react';
import Axios from "axios";
import { useFonts } from 'expo-font';
import { SvgUri } from 'react-native-svg';
import Svg, { Path } from "react-native-svg"


const loupe = require('../ressources/loupe.png');
const menu = require('../ressources/menu.png');
const check = require('../ressources/check.png');


export default function notifications(){
  const [fontsLoaded] = useFonts({
    'iransans': require('../ressources/FontsFree-Net-ir_sans.ttf'),
  });
  const [products, setProducts] = useState([]);
  const getCurrentDate=()=>{
    var day = new Date().getDay();
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return dayNames[day] + ' ' +date + ' ' + months[month];
}

  const getHour=()=>{
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
   return hours + ':' + min
  }
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
    <View style= {{flex: 1,backgroundColor: '#EBF2F6'}}>
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
            <View style={{flexDirection: 'row', position:'absolute'}}>
              <Text style={{borderColor:'black', backgroundColor:'red', marginLeft:'90%', borderRadius:25, color: 'white', marginTop: '11%'}}>{"  3  "}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style= {{marginLeft: '10%', color: '#1C4C9E', textDecorationLine: 'underline'}}>{"\n\rAll Notification"}</Text>
              <Text style= {{marginLeft: '12%', color: 'grey'}}>{"\n\rUnread"}</Text>
              <Text style= {{marginLeft: '12%', color: 'grey'}}>{"\n\rReminder"}</Text>
            </View>
            <Text style={{marginLeft: '5%'}}>{"\n\r"}{getCurrentDate()}</Text>
            {products.map((product) => (
              <View style= {{borderWidth: 2, borderColor: 'white', marginTop: '5%', borderRadius: 10, backgroundColor: 'white'}}>
                <View style={{position: "absolute", marginTop: '8%', marginLeft: '5%'}}>
                 <Image source={check}/>
                </View>                
                <Text style={{marginLeft: '10%', textAlign: 'center', marginBottom: '5%', fontFamily: 'iransans'}}>{"\n\r"}{product.title}{"\n\rPosted at "}{getHour()}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, padding: "5%", borderRadius: 11, flexDirection: "row",backgroundColor: "white"}}>
            <View style={{marginLeft: "12%", marginTop: "5%"}}>
              <Link href={"/"}>
                <Svg width={32}height={32} viewBox="0 0 32 32">
                <Path d="M10.6667 24H2.66667C1.2 24 0 22.8 0 21.3333V2.66667C0 1.2 1.2 0 2.66667 0H10.6667V24ZM13.3333 24H21.3333C22.8 24 24 22.8 24 21.3333V12H13.3333V24ZM24 9.33333V2.66667C24 1.2 22.8 0 21.3333 0H13.3333V9.33333H24Z"/>
                 </Svg>
              </Link>
            </View>
            <View style={{marginLeft: "12%", marginTop: "4%"}}>
              <Link href={"/scenario"}>
                <Svg width={32}height={32} viewBox="0 0 32 32">
                  <Path d="M16 3.19995C16.4244 3.19995 16.8313 3.36852 17.1314 3.66858C17.4314 3.96864 17.6 4.3756 17.6 4.79995V6.39995C17.6 6.8243 17.4314 7.23126 17.1314 7.53132C16.8313 7.83138 16.4244 7.99995 16 7.99995C15.5757 7.99995 15.1687 7.83138 14.8686 7.53132C14.5686 7.23126 14.4 6.8243 14.4 6.39995V4.79995C14.4 4.3756 14.5686 3.96864 14.8686 3.66858C15.1687 3.36852 15.5757 3.19995 16 3.19995ZM22.4 16C22.4 17.6973 21.7257 19.3252 20.5255 20.5254C19.3253 21.7257 17.6974 22.4 16 22.4C14.3026 22.4 12.6748 21.7257 11.4745 20.5254C10.2743 19.3252 9.60001 17.6973 9.60001 16C9.60001 14.3026 10.2743 12.6747 11.4745 11.4745C12.6748 10.2742 14.3026 9.59995 16 9.59995C17.6974 9.59995 19.3253 10.2742 20.5255 11.4745C21.7257 12.6747 22.4 14.3026 22.4 16ZM21.6576 23.92L22.7888 25.0512C23.0906 25.3426 23.4947 25.5039 23.9143 25.5002C24.3338 25.4966 24.7351 25.3283 25.0317 25.0317C25.3284 24.735 25.4966 24.3337 25.5003 23.9142C25.5039 23.4947 25.3427 23.0905 25.0512 22.7888L23.92 21.6576C23.6182 21.3661 23.2141 21.2048 22.7946 21.2085C22.3751 21.2121 21.9738 21.3804 21.6771 21.677C21.3804 21.9737 21.2122 22.375 21.2085 22.7945C21.2049 23.214 21.3662 23.6182 21.6576 23.92ZM25.0496 6.94875C25.3496 7.2488 25.5181 7.65569 25.5181 8.07995C25.5181 8.50421 25.3496 8.91111 25.0496 9.21115L23.92 10.3424C23.7724 10.4952 23.5959 10.6171 23.4007 10.7009C23.2055 10.7848 22.9955 10.8289 22.7831 10.8308C22.5706 10.8326 22.3599 10.7921 22.1633 10.7117C21.9667 10.6312 21.788 10.5124 21.6378 10.3622C21.4876 10.212 21.3687 10.0333 21.2883 9.83668C21.2078 9.64004 21.1674 9.42936 21.1692 9.21691C21.1711 9.00446 21.2152 8.79451 21.299 8.5993C21.3829 8.4041 21.5048 8.22755 21.6576 8.07995L22.7888 6.94875C23.0889 6.6488 23.4958 6.48029 23.92 6.48029C24.3443 6.48029 24.7512 6.6488 25.0512 6.94875H25.0496ZM27.2 17.6C27.6244 17.6 28.0313 17.4314 28.3314 17.1313C28.6314 16.8313 28.8 16.4243 28.8 16C28.8 15.5756 28.6314 15.1686 28.3314 14.8686C28.0313 14.5685 27.6244 14.4 27.2 14.4H25.6C25.1757 14.4 24.7687 14.5685 24.4686 14.8686C24.1686 15.1686 24 15.5756 24 16C24 16.4243 24.1686 16.8313 24.4686 17.1313C24.7687 17.4314 25.1757 17.6 25.6 17.6H27.2ZM16 24C16.4244 24 16.8313 24.1685 17.1314 24.4686C17.4314 24.7686 17.6 25.1756 17.6 25.6V27.2C17.6 27.6243 17.4314 28.0313 17.1314 28.3313C16.8313 28.6314 16.4244 28.8 16 28.8C15.5757 28.8 15.1687 28.6314 14.8686 28.3313C14.5686 28.0313 14.4 27.6243 14.4 27.2V25.6C14.4 25.1756 14.5686 24.7686 14.8686 24.4686C15.1687 24.1685 15.5757 24 16 24ZM8.08001 10.3424C8.22856 10.491 8.40494 10.6089 8.59907 10.6894C8.7932 10.7699 9.00129 10.8114 9.21145 10.8115C9.4216 10.8115 9.62972 10.7702 9.82391 10.6899C10.0181 10.6095 10.1946 10.4917 10.3432 10.3432C10.4919 10.1946 10.6098 10.0182 10.6903 9.82409C10.7708 9.62996 10.8123 9.42188 10.8123 9.21172C10.8124 9.00156 10.7711 8.79345 10.6907 8.59926C10.6104 8.40507 10.4926 8.22861 10.344 8.07995L9.21121 6.94875C8.90945 6.6573 8.50529 6.49603 8.08577 6.49967C7.66626 6.50332 7.26496 6.67159 6.9683 6.96824C6.67165 7.26489 6.50338 7.66619 6.49973 8.08571C6.49609 8.50522 6.65736 8.90939 6.94881 9.21115L8.08001 10.3424ZM10.3424 23.92L9.21121 25.0512C8.90945 25.3426 8.50529 25.5039 8.08577 25.5002C7.66626 25.4966 7.26496 25.3283 6.9683 25.0317C6.67165 24.735 6.50338 24.3337 6.49973 23.9142C6.49609 23.4947 6.65736 23.0905 6.94881 22.7888L8.08001 21.6576C8.38178 21.3661 8.78594 21.2048 9.20545 21.2085C9.62497 21.2121 10.0263 21.3804 10.3229 21.677C10.6196 21.9737 10.7878 22.375 10.7915 22.7945C10.7951 23.214 10.6339 23.6182 10.3424 23.92ZM6.40001 17.6C6.82436 17.6 7.23132 17.4314 7.53138 17.1313C7.83144 16.8313 8.00001 16.4243 8.00001 16C8.00001 15.5756 7.83144 15.1686 7.53138 14.8686C7.23132 14.5685 6.82436 14.4 6.40001 14.4H4.80001C4.37567 14.4 3.9687 14.5685 3.66864 14.8686C3.36858 15.1686 3.20001 15.5756 3.20001 16C3.20001 16.4243 3.36858 16.8313 3.66864 17.1313C3.9687 17.4314 4.37567 17.6 4.80001 17.6H6.40001Z"/>
        
                </Svg>
              </Link>
            </View>
            <View style={{marginLeft: "12%", marginTop: "4%"}}>
              <Link href={"/notifications"}>
                <Svg width={32}height={32} viewBox="0 0 32 32">
                  <Path d="M16 29.3334C17.4667 29.3334 18.6667 28.1334 18.6667 26.6667H13.3333C13.3333 27.374 13.6143 28.0522 14.1144 28.5523C14.6145 29.0524 15.2928 29.3334 16 29.3334ZM24 21.3334V14.6667C24 10.5734 21.8133 7.14671 18 6.24004V5.33337C18 4.22671 17.1067 3.33337 16 3.33337C14.8933 3.33337 14 4.22671 14 5.33337V6.24004C10.1733 7.14671 8.00001 10.56 8.00001 14.6667V21.3334L6.28001 23.0534C5.44001 23.8934 6.02667 25.3334 7.21334 25.3334H24.7733C25.96 25.3334 26.56 23.8934 25.72 23.0534L24 21.3334Z"/>
                </Svg>
              </Link>
            </View>
            <View style={{marginLeft: "12%", marginTop: "4%"}}>
              <Link href={"/user"}>
                <Svg width={32}height={32} viewBox="0 0 32 32">
                  <Path d="M20 14.6666H29.3334V17.3333H20V14.6666ZM21.3334 20H29.3334V22.6666H21.3334V20ZM18.6667 9.33329H29.3334V12H18.6667V9.33329ZM5.33335 25.3333H18.6667V24C18.6667 20.324 15.676 17.3333 12 17.3333H9.33335C5.65735 17.3333 2.66669 20.324 2.66669 24V25.3333H5.33335ZM10.6667 16C13.3267 16 15.3334 13.9933 15.3334 11.3333C15.3334 8.67329 13.3267 6.66663 10.6667 6.66663C8.00669 6.66663 6.00002 8.67329 6.00002 11.3333C6.00002 13.9933 8.00669 16 10.6667 16Z"/>
                </Svg>
              </Link>
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