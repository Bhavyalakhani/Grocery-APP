// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button ,Alert,TouchableOpacity } from 'react-native'
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
export default class signup extends React.Component {
  constructor(props){

    super(props);
    this.state = { email: '', password: '', errorMessage: null }
  }
handleSignUp = async () =>  {
  if(this.state.email=='' || this.state.password=='')
  {
    Alert.alert("enter your email or password ")
  }
  else{
    await auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
     await firestore().collection('appusers').doc(this.state.email).set({
       email:this.state.email
     }) 
    await auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    this.props.navigation.navigate("Main")
  }
}
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(email) => this.setState({ email:email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(password) => this.setState({ password:password })}
          value={this.state.password}
        />
        <Button title='already have an accpunt' onPress={() => {this.props.navigation.navigate('Login')}} styles={styles.button} />
        <TouchableOpacity onPress={this.handleSignUp}>
            <Text>signup</Text>
        </TouchableOpacity> 
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    color:"black"
  },
  button:{
      color:'black',
      backgroundColor:'pink'
  }
})