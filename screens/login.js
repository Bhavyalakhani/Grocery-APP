import React from 'react'
import { StyleSheet, Text, TextInput, View, Button ,Alert} from 'react-native'
import auth from "@react-native-firebase/auth"
import storage from "@react-native-firebase/storage"

export default class login extends React.Component {
  constructor(props){
    super(props);  
    
    this.state = { email: '', password: '', errorMessage: null }
  
  
    }
  handleLogin = async () => {
    if(this.state.email=='')
    {
        Alert.alert('enter your email')
    }
    else{
        await auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        await firestore
        x=await storage().ref('images/cat-image.jpeg').getDownloadURL();

        console.log(x)
        this.props.navigation.navigate('Main')
        console.log('Login Successful')
    }  
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(email) => this.setState({ email:email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(password) => this.setState({ password:password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})