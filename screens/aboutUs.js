import React, {Component} from 'react';
import {View,Text} from 'react-native';

import {styles} from '../Styles/main';

class aboutUsComponent extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <Text>JOHANESA Asandratry Ny Avo</Text>
                <Text>Université Des Mascareignes</Text>
            </View>
        )
    }
}

export default aboutUsComponent;