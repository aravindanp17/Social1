import React, {Component} from 'react';

import {View, Text, StyleSheet,Image} from 'react-native';

class Search extends Component {
  state = {};
  render() {
    return (
      <View  style={{backgroundColor:'white'}}>

<View style={{backgroundColor:'#EEEEEE',flexDirection:'row',marginTop:10,height:35,borderRadius:20,margin:10}}>
    <TextInput
     style={{marginLeft:10,borderRadius:10,fontSize: 16,padding:5,width:'85%'}}
     placeholder={'Search'}
     />

    
    <Image
                source={require('../../assets/search.png')}
                style={{ height: 20, width: 25,resizeMode:'contain', alignSelf: 'center',marginLeft:10 }}
            />
</View>


<View style={{borderBottomWidth:0.54}}>
<Text style={{marginLeft:20,marginBottom:5,fontSize:16}}>Recent Search</Text>
</View>

<View style={{backgroundColor:'white', marginTop:10,flexDirection:'row'}}>
    <View>
<Image
                source={require('../../assets/syn.png')}
                style={{ height: 45, width: 45,resizeMode:'cover', alignSelf: 'center',marginLeft:10,borderRadius:100000 }}
            /></View>
    <Text style={{ marginTop:10, marginLeft:10}}>Neymar</Text>
    <Image
                source={require('./assets/cancel.png')}
                style={{ height: 18, width: 18,resizeMode:'contain', alignSelf: 'center',marginLeft:240,borderRadius:100000 }}
            />
    </View>
    
</View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
