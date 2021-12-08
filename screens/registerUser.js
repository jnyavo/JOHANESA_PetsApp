import React, {Component,useState} from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,Image,ScrollView,TouchableOpacity} from 'react-native';
import { Checkbox } from 'react-native-paper';
import {styles} from "../Styles/main";




class registerUserComponent extends Component
{
    state = 
    {
        policyCheck:false
    }
    setCheck = policyCheck =>
    {
        this.setState({policyCheck:policyCheck});
    }

   

    render()
    {
       
        return(
            <View style={{flex: 1}}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    }}>
                    <View style={{alignItems: 'center'}}>
                    <Image
                        source={require('../assets/icon1.png')}
                        style={{
                        width: '50%',
                        height: 100,
                        resizeMode: 'contain',
                        margin: 30,
                        }}
                    />
                    </View>
                    <KeyboardAvoidingView enabled>
                    <View style={styles.SectionStyle}>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={()=>{}}
                        underlineColorAndroid="#f000"
                        placeholder="Enter Name"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        onSubmitEditing={()=>{}}
                        blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={()=>{}}
                        underlineColorAndroid="#f000"
                        placeholder="Enter Email"
                        placeholderTextColor="#8b9cb5"
                        keyboardType="email-address"
                        
                        returnKeyType="next"
                        onSubmitEditing={()=>{}}
                        blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={()=>{}}
                        underlineColorAndroid="#f000"
                        placeholder="Enter Password"
                        placeholderTextColor="#8b9cb5"
                        
                        returnKeyType="next"
                        secureTextEntry={true}
                        onSubmitEditing={()=>{}}
                        blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={()=>{}}
                        underlineColorAndroid="#f000"
                        placeholder="Confirm Password"
                        placeholderTextColor="#8b9cb5"
                        
                        returnKeyType="next"
                        secureTextEntry={true}
                        onSubmitEditing={()=>{}}
                        blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={()=>{}}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Age"
                            placeholderTextColor="#8b9cb5"
                            keyboardType="numeric"
                        
                            returnKeyType="next"
                            onSubmitEditing={()=>{}}
                            blurOnSubmit={false}
                            />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={()=>{}}
                        underlineColorAndroid="#f000"
                        placeholder="Enter Address"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="sentences"
                        ref={()=>{}}
                        returnKeyType="next"
                        onSubmitEditing={()=>{}}
                        blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Checkbox status={this.state.policyCheck ? "checked":"unchecked"}
                            onPress={()=>{this.setCheck(!this.state.policyCheck)}}
                        />
                        <Text>I agree to the terms of usage and privacy policies</Text>
                    </View>
                    
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={()=>{()=>{}}}>
                        <Text style={styles.buttonTextStyle}>REGISTER</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

export default registerUserComponent;


