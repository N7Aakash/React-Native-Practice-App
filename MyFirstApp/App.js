/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

//Custom Component
import Spinner from "./components/Spinner";


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for denpm v menu',
// });

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      billAmount: "",
      tip: "",
      splitCount: 0,
      totalAmount: "0",
      splitTotal: "0"
    };
  }

  render() {
    console.log("Render Called");
    return (
        <View style={styles.container}>
          {/*Main Container*/}

          {/*Header*/}
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Tip & Split</Text>
          </View>
          {/*End of Header*/}


          {/*Input Group*/}
          <View style={styles.inputGroupContainer}>
            <Text style={styles.inputLabel}>Bill Total :</Text>
            <TextInput style={styles.input}
                       onChangeText={(text) => this.calculateTip(text, this.state.tip, this.state.splitCount)}
                       value={this.state.billAmount} placeholder={"0.00"}/>
          </View>

          <View style={styles.inputGroupContainer}>
            <Text style={styles.inputLabel}>Tip :</Text>
            <TextInput style={styles.input}
                       onChangeText={(text) => this.calculateTip(this.state.billAmount, text, this.state.splitCount)}
                       value={this.state.tip} placeholder =  {"0%"}/>
          </View>

          <View style={styles.inputGroupContainer}>
            <Text style={styles.inputLabel}>Split :</Text>
            <Spinner onChange={(value) => this.calculateTip(this.state.billAmount, this.state.tip, value)}/>
          </View>
          {/*Input Group*/}

          {/*Footer*/}
          <View style={styles.footerContainer}>
            <View style={styles.resultContainer}>

              <View>
                <Text style={styles.resultLabel}>Total Amount: </Text>
                <Text style={styles.resultValue}>{this.state.totalAmount}</Text>
              </View>

              <View>
                <Text style={styles.resultLabel}>Split Total: </Text>
                <Text style={styles.resultValue}>{this.state.splitTotal}</Text>
              </View>
            </View>
          </View>
          {/*Footer*/}

          {/*Main Container*/}
        </View>
    );
  }


  calculateTip(billAmount, tip, splitCount) {
    if (!isNaN(billAmount) && !isNaN(tip)) {
      if ((billAmount !== "" || tip !== "" )&& splitCount === 0) {
        if(splitCount === 0){
          this.setState({
          billAmount: billAmount,
          tip: tip,
          splitTotal: "0",
          });
          return;
        }else{
          billAmount = parseInt(billAmount);
          tip = parseInt(tip);
          let tipAmount = (billAmount * tip) / 100;
          let perHead = (billAmount + tipAmount) / splitCount;


          this.setState({
            billAmount: billAmount + "",
            tip: tip + "",
            totalAmount: tipAmount + billAmount,
            splitTotal: parseFloat(perHead.toFixed(2))
          });
        }
      }else {
        this.setState({
          billAmount: "",
          tip : "",
          splitTotal : "0"
        });
      }
      
      
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    flexDirection: "column",
    paddingHorizontal: 30,
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },

  inputGroupContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start"
  },

  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 60
  },

  header:{
    fontSize: 32,
    color: '#5C4CD3',
    fontWeight: '700'
  },

  inputLabel:{
    fontSize: 20,
    fontWeight: '600',
    color: '#A5A4A5',
    marginBottom: 5
  },

  input:{
    fontSize: 48,
    color: '#333032',
    fontWeight: '700'
  },

  resultContainer:{
    backgroundColor: '#F2F2FB',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15
  },

  resultLabel:{
    color: "#5C4CD3",
    fontSize: 14,
    fontWeight: '600'
  },

  resultValue:{
    color: "#5C4CD3",
    fontSize: 32,
    fontWeight: '700'
  }
});
