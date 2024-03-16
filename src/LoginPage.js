import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert, ScrollView, Image } from 'react-native';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Fontisto from 'react-native-vector-icons/Fontisto';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'kminchelle',
//     password: '0lelplR',
//     // expiresInMins: 60, // optional
//   })
// })
// .then(res => res.json())
// .then(console.log);



const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = async () => {
    try {
        console.log(email, password);
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
        //   "email": user,
        //   "password": password
        username: email,
        password: password,
          }
          ),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Successful login
      props.navigation.navigate("HomePage");
      } else {
        // Login failed
        Alert.alert("Invalid Credential")
        console.log("Error in response")

        return { success: false, error: data.message };
      }
    } catch (error) {
      // Network error or other errors
      return { success: false, error: 'Network error or server unavailable' };
    }
  };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', }}>
          <Image source = {require("../src/assets/productImage.jpg")}  style= {{alignSelf: 'center', marginTop: responsiveHeight(5), height: responsiveHeight(30), width: responsiveWidth(80)}}/>
            <View>
                <Text style={{ fontSize: responsiveFontSize(4), fontWeight: 'bold', marginTop: responsiveHeight(12),marginBottom: responsiveHeight(2), marginLeft: responsiveWidth(6), color: 'black' }}>Login</Text>
                
                
                    {/* <MaterialCommunityIcons name="email" size={25} color='#ff4c00' style={{ alignSelf: 'center' }} /> */}
                    
                    <View style={styles.inputContainer}>
                    <Image source = {require("../src/assets/email.png")}  style= {{height: responsiveHeight(3) , width: responsiveWidth(6), marginRight: responsiveWidth(2)}}/>
                    <TextInput placeholder='Email ID' keyboardType={"email-address"} onChangeText={text => setEmail(text)} placeholderTextColor="gray" style={{ width: responsiveWidth(65), fontSize: responsiveFontSize(2),  paddingBottom: 5 }} />
                </View>
                
                

                <View style={styles.inputContainer} >
                <Image source = {require("../src/assets/password.png")}  style= {{height: responsiveHeight(3) , width: responsiveWidth(6), marginRight: responsiveWidth(2)}}/>
                  
                    <TextInput placeholder='Password' secureTextEntry={true} onChangeText={text => setPassword(text)} placeholderTextColor="gray" style={{width: responsiveWidth(65), fontSize: responsiveFontSize(2),  paddingBottom: 5 }} />
                </View>

                <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: responsiveHeight(1) }}>
                    <Text style={{ color: 'blue', fontWeight: '800', fontSize: responsiveFontSize(2), marginRight: responsiveWidth(10) }}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}  onPress={login}>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: responsiveFontSize(2.5) }}>Login</Text>
                </TouchableOpacity>

               

                <View style={styles.signupStyle}>
                    <Text style={{ fontSize: responsiveFontSize(1.8), color: 'gray', fontWeight: 'bold' }}>New to Logistics? </Text>
                    <TouchableOpacity >
                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>Register</Text>
                    </TouchableOpacity>

                </View>



            </View>
            </ScrollView>

    );
};



const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1, // You can adjust the width of the border as needed
    borderBottomColor: 'gray', // You can change the color of the border as needed
    marginBottom: 20,
    width: responsiveWidth(70), // Adjust this value to create spacing between input fields
    marginLeft: responsiveWidth(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
 //   backgroundColor: 'blue'
    
},

    // emailStyle: {
    //     borderRadius: responsiveWidth(7),
    //     marginHorizontal: responsiveWidth(8),
    //     //  marginBottom: responsiveHeight(4),
    //     width: '100',
    //     height: responsiveHeight(8),
    //     backgroundColor: 'rgb(220, 220, 220)',
    //     marginTop: responsiveHeight(4),
    //     paddingHorizontal: responsiveWidth(5),
    //     flexDirection: 'row'

    // },
    // passwordStyle: {
    //     borderRadius: responsiveWidth(7),
    //     marginHorizontal: responsiveWidth(8),

    //     width: '100',
    //     height: responsiveHeight(8),
    //     backgroundColor: 'rgb(220, 220, 220)',
    //     marginTop: responsiveHeight(4),
    //     paddingHorizontal: responsiveWidth(5),
    //     flexDirection: 'row'
    // },
    buttonStyle: {
        borderRadius: responsiveWidth(7),
        marginHorizontal: responsiveWidth(8),
        //  marginBottom: responsiveHeight(4),
        width: '100',
        height: responsiveHeight(7),
        backgroundColor: 'blue',
        marginTop: responsiveHeight(4),
        alignItems: 'center',
        justifyContent: 'center'

    },
    signupStyle : {
        flexDirection: 'row', 
        justifyContent: 'center',
         marginTop: responsiveHeight(8), 
         width: '100%', 
         
    }

});

export default LoginPage;