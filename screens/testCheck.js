import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Checkbox,RadioButton} from 'react-native-paper';

class testCheckComponent extends Component
{
    state = {
        check:false,
        value:null
    }
    setValue = value =>
    {
        this.setState({value})
    }
    setCheck = check =>
    {
        this.setState({check:check})
    }
    render()
    {
        return(
            <View>
                <Checkbox status={this.state.check ? "checked": "unchecked"}
                onPress={()=>{this.setCheck(!this.state.check)}}
                ></Checkbox>
                <View>

                    <RadioButton.Group

                    onValueChange={(value) => this.setValue(value)}

                    value={this.state.value}

                    >

                        <RadioButton.Item label="First item" value="first" />

                        <RadioButton.Item label="Second item" value="second" />

                        <RadioButton.Item label="Third item" value="third" />

                    </RadioButton.Group>

                </View>
            </View>
            
        )
    }
}

export default testCheckComponent;
