import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

// import styles from './styles';

export default class RoundButton extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> this.props.onPress()}>
                <Text style={styles.buttonText}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }

}
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: "#E2E2F7",
        display: "flex",
        flexDirection: "row",
        borderRadius: 30,
        width:50,
        height:50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#5C4CD3",
        fontSize: 28,
        fontWeight: '700'
    }
});