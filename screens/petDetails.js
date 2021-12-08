import React,{Component} from 'react';

import {View,Text,Button,VirtualizedList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';

import {styles} from '../Styles/main';

class petDetailsComponent extends Component
{
    
    render()
    {
        var Data = this.props.route.params;
        return(
            <View style={styles.container}>
                <Text style={styles.id}>{Data.pet.name}</Text>
                <Text>{Data.pet.specie.name}</Text>
                <Text>{Data.pet.breed.name}</Text>
                <Text>Owner : {Data.pet.owner} </Text>
                <Text>{Data.pet.description}</Text>
            <View style={styles.SectionStyle}>
                {Data.pet.purpose.map(item=>
                        <Button title={item} onPress={()=>{}} />
                    )} 
            </View>
                
                
   
            </View>
            
            
        )
    }
}

export default petDetailsComponent;
