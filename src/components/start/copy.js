//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// create a component
class copy extends Component {

    click() {

        this.props.navigation.navigate('Sc2')
    
    };

    render() {
        return (

            <View style={styles.container}>

                <View style = {styles.BoxImage}>
                    <Image source = { require('../image/icons/scren1-01.png') } style = {styles.image} />
                </View>

               
                <Text style = {styles.Txt} >Online Education</Text>
                
               <View style = {{  height: 135 }}>
       
                <TouchableOpacity style = {styles.button} onPress = { () => this.click() } >
                    <Text style = {styles.btnTxt} >Next</Text>
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
    button: {
        height: 50, 
        width: 80, 
        borderColor: 'black', 
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'white',
        marginTop: 80,
        marginLeft: '40%'
    
    },
    btnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    Txt: {
        color: 'white', 
        position: 'absolute', 
        marginTop: 400, 
        fontSize: 30, 
        marginLeft: 60, 
        fontWeight: 'bold'  
    }
});


//make this component available to the app
export default copy;




/*

 









*/



// marginTop: 100, width: 100, height: 40, backgroundColor:'red', justifyContent: 'center'