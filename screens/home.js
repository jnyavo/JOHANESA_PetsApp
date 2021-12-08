import React, {Component} from 'react';
import {View,Button,Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import PetsScreen from './pets';
import RegisterPetScreen from './registerPet';
import testCheckScreen from './testCheck';
import aboutUsScreen from './aboutUs';


const Drawer = createDrawerNavigator(); 

class HomeComponent extends Component
{
    
    render()
    {

        return(
            <Drawer.Navigator>
                <Drawer.Screen name="Pets" component={PetsScreen} />
                <Drawer.Screen name="Sell or Exchange Pet" component={RegisterPetScreen} />
               
                <Drawer.Screen name='About Us' component={aboutUsScreen} />
            </Drawer.Navigator>
                
            
        )
    }
}

export default HomeComponent;