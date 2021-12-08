import React, {Component} from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,Image,ScrollView,TouchableOpacity,Button,Picker} from 'react-native';

import {styles} from "../Styles/main";

class registerPetComponent extends Component
{
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
                        <Button title="Add photos" />
                    </View>
                    <View style={{
                                height: 40,
                                marginTop: 20,
                                marginLeft: 35,
                                marginRight: 35,
                                margin: 10,}}>
                        <Text style={{color:'#AAA'}}>Specie</Text>
                        <Picker >
                            <Picker.Item label="Dog" value="Dog" />
                            <Picker.Item label="Cat" value="Cat" />
                        </Picker>
                    </View>
                        
                    <View style={styles.largeSectionStyle}>
                        <TextInput
                        style={styles.largeInputStyle}
                        onChangeText={()=>{}}
                        underlineColorAndroid="#f000"
                        multiline={true}
                        placeholder="Description"
                        numberOfLines={3}
                        returnKeyType="next"
                        onSubmitEditing={()=>{}}
                       
                        />
                    </View>
                    
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity
                        style={styles.buttonPet}
                        activeOpacity={0.5}
                        onPress={()=>{()=>{}}}>
                        <Text style={styles.buttonTextStyle}>SELL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonPet}
                        activeOpacity={0.5}
                        onPress={()=>{()=>{}}}>
                        <Text style={styles.buttonTextStyle}>EXCHANGE</Text>
                    </TouchableOpacity>
                    </View>
                    
                    
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

export default registerPetComponent;


