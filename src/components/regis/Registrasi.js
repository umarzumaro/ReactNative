//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

// create a component
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// create a component
class Registrasi extends Component {

    click() {

        this.props.navigation.navigate('Login')
    
    };


    render() {

        return (
             <ImageBackground source = { require('../image/login/bg4-01.png') } style = {{ height: height - 20, width: width}} > 

            
                <View style = { styles.BoxInput }>
                    <View style = {styles.BoxinputBody} >
                        <TextInput  placeholder="Nama" style = {styles.InputTxt} />
                    </View>
                    <View style={{ height: 10 }} />
                    <View style = {styles.BoxinputBody} >
                        <TextInput  placeholder="Username" style = {styles.InputTxt} />
                    </View>
                    <View style={{ height: 10 }} />
                    <View style = {styles.BoxinputBody} >
                        <TextInput  placeholder="Email" style = {styles.InputTxt} />
                    </View>
                    <View style={{ height: 10 }} />
                    <View style = {styles.BoxinputBody} >
                        <TextInput  placeholder="Password" style = {styles.InputTxt} />
                    </View>
                </View>

                <View style={styles.BoxButton}>
                   
                    <TouchableOpacity style = {styles.button}>
                        
                        <Text style = {{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Sign In</Text>
                    </TouchableOpacity >

                    <View style={{ height: 20 }} />

                    <TouchableOpacity>
                    <View style = {{ marginLeft: '43%' }}>
                        <Text style = {{ color: '#1595D8' }} >Forgot Password</Text>
                    </View>
                    </TouchableOpacity>
                </View>

                
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                <Text>Are you member ? </Text>
                    <TouchableOpacity onPress = { () => this.click()} >
                        
                        <Text style = {{ color: '#1595D8' }}> Login</Text>
                    </TouchableOpacity> 
                </View>
            
       
        </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
   /* container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'red',
    }, */
    BoxInput: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 240

    }, 
    BoxinputBody: { 
        borderColor: '#1595D8',
        borderWidth: 2,
        height: 50,
        width: width - 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    BoxButton: {
        marginTop: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1595D8',
        padding: 10,
        width: width - 80,
        borderRadius: 10
        //marginTop: 16,
      },
      BoxForgot: {
        flexDirection: 'column', 
        justifyContent: 'flex-start'
      },
      InputTxt: {
        fontSize: 20
      }
});



//make this component available to the app
export default Registrasi;
