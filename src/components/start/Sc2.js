//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// create a component
class Sc2 extends Component {

    toSc3() {

        this.props.navigation.navigate('Sc3')
    
    };

    toSc1() {
        this.props.navigation.navigate('copy')
    }

    render() {
        return (

            <View style={styles.container}>

                <View style = {styles.BoxImage}>
                    <Image source = { require('../image/icons/scren2-01.png') } style = {styles.image} />
                </View>

                <Text style = {styles.Txt} >Steps To Success</Text>

            <View style = {styles.BoxBtn} >
                <TouchableOpacity style = {styles.button} onPress = { () => this.toSc1() } >
                    <Text style = {styles.btnTxt} >Back</Text>
                </TouchableOpacity>
                
           
                <TouchableOpacity style = {styles.buttonNext} onPress = { () => this.toSc3() }  >
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

 









*/



// marginTop: 100, width: 100, height: 40, backgroundColor:'red', justifyContent: 'center'


















/*
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Sc2 extends Component {

    click() {

        this.props.navigation.navigate('Sc3')
    
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Sc2</Text>
                <Button title = 'to sc3' onPress = { () => this.click() } />
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
        backgroundColor: '#1595D8',
    },
});

//make this component available to the app
export default Sc2;

*/
