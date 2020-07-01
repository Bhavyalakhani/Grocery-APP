import React,{Component} from 'react'
import { StyleSheet, Platform, Image, Text, View,TouchableOpacity } from 'react-native'
import auth from "@react-native-firebase/auth"
export default class main extends Component {
    constructor(props){
        super(props);
        this.state={
            username:auth().currentUser.email
        }
    }

    signout = async () => {
        await auth().signOut()
        this.props.navigation.navigate('Login')
  }
render() {
return (
      <View style={styles.container}>
        <Text>
          Hi {String(this.state.username)}!
          user number {auth().currentUser.uid}
        </Text>
        <TouchableOpacity onPress={this.signout}>
            <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})