import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { styles } from '../Styles/main';

import {PETS} from "../data/pets";



class petsComponent extends Component
{
    
    renderPet = (Data)=>
    {
        return(
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("PetDetails",{pet:Data.item})
                }}>
                    <View style={styles.containerListe}>
                        <Text style={styles.id}>{Data.item.name}</Text>
                        <Text>specie: {Data.item.specie.name}</Text>
                        <Text>breed: {Data.item.breed.name}</Text>
                    </View>
                </TouchableOpacity>
                
            
            

        )
    }
    render()
    {
        return(
        <View>
            <FlatList numColumns={1} data={PETS} renderItem={this.renderPet} />
        </View>
        )
    }
}

export default petsComponent;