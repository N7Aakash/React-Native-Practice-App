import React from "react";
import {View,Text,StyleSheet} from "react-native";
import RoundButton from "./RoundButton";
export default class Spinner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    render(){
        return(
        <View style={styles.spinnerContainer}>
            <RoundButton title="-" onPress={()=>this.decrementValue()}/>
            <Text style={styles.label}>{this.state.count}</Text>
            <RoundButton title="+" onPress={()=>this.incrementValue()}/>
        </View>
    );
    }
    incrementValue(){
        let count = this.state.count + 1;
        this.setState({
            count: count
        });
        this.props.onChange(count);
    }
    decrementValue(){
        let count = this.state.count;
        if(count !== 0){
            count = count -1;
            this.setState({
                count: count
            });
            this.props.onChange(count);
        }
    }
}
const styles = StyleSheet.create({
    spinnerContainer:{
        flexDirection: "row",

    },
    label:{
        fontSize: 36,
        fontWeight: "700",
        alignSelf: "center",
        color: "#333032",
        paddingHorizontal: 15
    }
});
