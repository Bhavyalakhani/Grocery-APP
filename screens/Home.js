import React,{Component} from "react"
import {
    View,
    TouchableOpacity,
    Text,
    Button

} from "react-native"



class Home extends Component{
    render(){
        return(
            <View>
                <Text style={{alignContent:"center"}}>this is the home screen</Text>
                 <TouchableOpacity onPress={() => {this.props.navigation.navigate('Settings')}}>
                     <Text>click to go on the settings screens</Text>
                 </TouchableOpacity>
            </View>
        )
    }

}

export default Home