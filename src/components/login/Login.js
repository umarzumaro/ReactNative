//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground, Alert} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// create a component
class Login extends Component {

    click() {

        this.props.navigation.navigate('Registrasi')
    
    };

    constructor(){

        super();
        this.state = {
            userName:  '',
            Password:  ''
        }
    }

    toHome(){

        if (this.state.userName == 'umar' && this.state.Password == '123' ) {

        this.props.navigation.navigate('Home');

    }else if( this.state.userName == '' && this.state.Password == '' ) {

        Alert.alert('React Native', 'Username atau Password Kosong')

    }else {

        Alert.alert('React Native', 'Username atau Password Salah')
    }

};


    render() {
        return (
             <ImageBackground source = { require('../image/login/bg4-01.png') } style = {styles.imgBg} > 

           
            
                <View style = { styles.BoxInput }>
                    <View style = {styles.BoxinputBody} >
                        <TextInput  placeholder="Username" style = {styles.InputTxt} onChangeText = { (test) => this.setState({ userName: test }) }  />
                    </View>

                    <View style={{ height: 30 }} />
                    
                    <View style = {styles.BoxinputBody} >
                        <TextInput  placeholder="Password" style = {styles.InputTxt} onChangeText = { (text) => this.setState({ Password: text } ) } />
                    </View>
                </View>

                <View style={styles.BoxButton}>
                   
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonTxt} onPress={() => this.toHome()}  >Login</Text>
                    </TouchableOpacity >

                    <View style={{ height: 20 }} />

                    <TouchableOpacity>
                        <View style = {{ marginLeft: '43%' }}>
                            <Text style = {{ color: '#1595D8' }} >Forgot Password</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                
                <View style = {styles.txtMember}>
                <Text>Are you member ? </Text>
                    <TouchableOpacity onPress = { () => this.click()} >
                        
                        <Text style = {{ color: '#1595D8' }}> Sign In</Text>
                    </TouchableOpacity> 
                </View>
            
       
        </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
   /* container {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'red',
    }, */
    imgBg: {
        height: height - 20, 
        width: width
    },
    BoxInput: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 270

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
      },
      buttonTxt: {
        color: 'white', 
        fontSize: 20, 
        fontWeight: 'bold' 
      },
      txtMember: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 60
      }
});

//make this component available to the app
export default Login;
