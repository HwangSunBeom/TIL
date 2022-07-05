// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection:"row"}}>
      <View style={{flex: 1,backgroundColor:"orange",}}></View>
      <View style={{flex: 2,backgroundColor:"teal"}}></View>
      <View style={{flex: 1,backgroundColor:"tomato"}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#F0F0F0',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection:"row"
  // },
  text: {
    fontSize:28,
    color:"red",
  },
  flexbox: {
    width:100,
    height:100,
    backgroundColor:"red",
  },
  background_tomato: {
    backgroundColor:"tomato"
  },
  background_teal: {
    backgroundColor:"teal"
  },
  background_orange:{
    backgroundColor:"orange"
  },
});
