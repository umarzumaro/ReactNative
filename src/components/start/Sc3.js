//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// create a component
class Sc2 extends Component {

    toLogin() {

        this.props.navigation.navigate('Login')
    
    };

    toSc2() {
        this.props.navigation.navigate('Sc2')
    }

    
    render() {
        return (

            <View style={styles.container}>

                <View style = {styles.BoxImage}>
                    <Image source = { require('../image/icons/scren3-01.png') } style = {styles.image} />
                </View>

                <Text style = {styles.Txt} >Best Online Course</Text>

            <View style = {styles.BoxBtn} >
                <TouchableOpacity style = {styles.button} onPress = { () => this.toSc2() } >
                    <Text style = {styles.btnTxt} >Back</Text>
                </TouchableOpacity>
                
           
                <TouchableOpacity style = {styles.buttonNext} onPress = { () => this.toLogin() }  >
                    <Text style = {styles.btnTxt} >Mulai</Text>
                </TouchableOpacity>
            </View>
               


            </View>

        )
    }
   
}


// define your styles
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        width: width,
        height: height,
        backgroundColor: '#1595D8',
    },
    BoxImage: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 100

    },
    image: {
        
        height: 400,
        width: 400
    },
    Txt: {
        color: 'white', 
        position: 'absolute', 
        marginTop: 400, 
        fontSize: 30, 
        marginLeft: 60, 
        fontWeight: 'bold'  
    },
    BoxBtn: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 80

    },
    button: {
        height: 50, 
        width: 80, 
        borderColor: 'black', 
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'white',
        marginLeft: 20
        //marginTop: 10,
        //marginLeft: '40%',
    
    },
    buttonNext:{
        height: 50, 
        width: 80, 
        borderColor: 'black', 
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'white',
        //marginTop: 10,
        marginRight: 20,
       ///marginTop: 80
    },
    btnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});


//make this component available to the app
export default Sc2;










/*
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';




// create a component
class Sc3 extends Component {


    click() {

        this.props.navigation.navigate('Login')
    
    };
    

    render() {
        return (
            <View style={styles.container}>
                <Text>sc3</Text>
                <Button title = 'to login' onPress={() => this.click()} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Sc3;
*/