import React from 'react';
import { useState } from 'react';
import {Text,StyleSheet,View, Image, ScrollView,TextInput,FlatList } from 'react-native';
 

const HomeScreen = ()=> {
    const[people,setPeople]= useState([
        // {name:'Shaun',id:'1',src:('./assets/image.png')},
        // {name:'Shaunppp',id:'2',src:('./assets/ss.png')},
        // {name:'Shauniii',id:'3',src:('./assets/ss.png')},
        // {name:'Shauniii',id:'4',src:('./assets/ss.png')},
        require('../assets/image.png'),
        require('../assets/ss.png'),
        require('../assets/image.png'),
        require('../assets/syn.png'),
        require('../assets/syn.png'),
        require('../assets/syn.png'),
            ])
            const renderItem = ({item}) =>{
                return(
                    
                        <View style={{margin:1,height: 220, width: 250,flex:1/2}}>
                            {/* <Text>{item.name}</Text>   */}
                            <Image
                        source={item}
                        style={{ height: 200,flex:1,width: 125,resizeMode:'cover',}}
                    />
                        </View>
                            
                   
                )
            }
  
  return <View >
  
  
  <FlatList
    numColumns={3}
   data={people}
   renderItem={renderItem}
   keyExtractor={(item)=>item.id}
   style={{marginTop:20,}}
   />

   






</View>

};

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

export default HomeScreen; 


