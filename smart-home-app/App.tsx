import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

const PlaceholderImage = require('./assets/images/donald-pdp.jpeg');

export default function App() {
  return (
    <View style= {{flex: 1,backgroundColor: '#F5F5DC',}}>
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
      <Button title= 'Public area' onPress={sayHello} />
    </View>
  );
}
function sayHello() {
  alert('You clicked me!');
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
  }
});
