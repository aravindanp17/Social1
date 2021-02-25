import React from 'react';
import { useState } from 'react';
import {Text,StyleSheet,View, Image, ScrollView,TextInput,FlatList ,TouchableOpacity} from 'react-native';
 import HomeScreen from './app/ImageList'
 import Search from './app/screens/Search'
// import Router from './app/config/router'
const App = ()=> {

  
  return <View>
      <View style={{borderBottomColor: '#DCDCDC', alignSelf: 'center',backgroundColor:'white',width:'100%'}} > 
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:15,marginRight:15}}>
  <Image style ={{width:35,height:35,marginTop:7}} source= {require('./assets/upload.png') }/>
    <Text style={{fontSize:25,fontWeight:'bold',marginTop:10,marginBottom:10}}>Name</Text>
    <Image style ={{width:35,height:35,marginTop:7}} source= {require('./assets/message.png') }/>
    </View>
    <View style={{backgroundColor:'white',flexDirection:'row'}}>
    <View style={styles.searchBoxView1}>          
          <TextInput
                        style={styles.searchBox1}
              placeholder={'B/W'}
          >
          </TextInput>
         
      </View>

     <View style={styles.searchBoxView}>
          
            <TextInput
                textAlign={'center'}
                style={styles.searchBox}
                placeholder={'Search'}
            >
            </TextInput>
            <TouchableOpacity >
            <Image
                source={require('./assets/search.png')}
                style={{ height: 20, width: 25,resizeMode:'contain', alignSelf: 'center', margin:31 }}
            />
            </TouchableOpacity>
        </View>
        <HomeScreen/> 
   
   </View> 
 </View>  
  </View>



}

const styles = StyleSheet.create({

  searchBoxView1:
    {
       
        backgroundColor: '#EEEEEE',
        marginHorizontal: '3%',
        width: '30%',
        borderRadius: 30,
        marginTop:10,
        height:30
    },
    searchBoxView:
    {
        flexDirection: 'row',
        backgroundColor: '#EEEEEE',
        marginHorizontal: '3%',
        width: '58%',
        borderRadius: 30,
        marginTop:10,
        height:30
    },
    searchBox1:
    {
        width: '90%',        
        backgroundColor: '#EEEEEE',
        textAlign: 'left',
        padding: 5,
        marginLeft: 10,
        fontSize: 16,
        borderRadius:30
    },
    searchBox:
    {
        width: '50%',        
        backgroundColor: '#EEEEEE',
        textAlign: 'center',
        alignItems:'center',
        padding: 5,
        marginLeft: 50,
        fontSize: 16
    },
})

export default App; 


