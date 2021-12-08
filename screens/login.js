import React, {Component} from 'react';
import {View,Text,TextInput,Button,TouchableOpacity,Image} from 'react-native';

import {styles} from '../Styles/main';

class loginComponent extends Component
{
    state =
    {
        username:"",
        pass:""
    }

    handleUsername = (text) =>
    {
        this.setState({username:text});
    }
    handlePass = (text) =>
    {
        this.setState({password:text});
    }

    login = () =>
    {
        if(this.state.username == "")
            return null;
        if (this.state.password == "")
            return null;
        this.props.navigation.navigate("Home");
    }
    render()
    {
        return (
            <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/icon1.png")} />
 
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={this.handleUsername}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={this.handlePass}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Register")}>
        <Text style={styles.forgot_button}>Register</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
        )
    }
}

export default loginComponent;