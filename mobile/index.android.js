import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class firstTry extends Component {
  constructor() {
    super();
    this.state = {
        pros: [''],
        cons: [''],
    };
  }

  render() {

    const renderPros = this.state.pros.map((pro, idx) => {
      return (
        <View key={idx} style={styles.listElement}>
          <TextInput
            style={styles.listElement}
            value={pro}
            onChangeText={(text) => {
              let newPros = this.state.pros;
              if (text === '') {
                newPros.splice(idx, 1);
              }
              else if (idx == newPros.length - 1) {
                newPros.push('');
              }
              newPros[idx] = text;
              this.setState({pros: newPros})
            }}
          />
        </View>
      )
    })

    const renderCons = this.state.cons.map((con, idx) => {
      return (
        <View key={idx} style={styles.listElement}>
          <TextInput
            style={styles.listElement}
            value={con}
            onChangeText={(text) => {
              let newCons = this.state.cons;
              newCons[idx] = text;
              if (newCons[idx] === '') {
                newCons.splice(idx, 1);
              }
              else if (idx === newCons.length - 1) {
                newCons.push('');
              }
              this.setState({cons: newCons})
            }}
          />
        </View>
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.procon}>
          <View style={styles.proconListLogo}><Text style={styles.logo}>Pros</Text></View>
          <View style={styles.proconList}>
            {renderPros}
          </View>
        </View>
        <View style={styles.procon}>
          <View style={styles.proconListLogo}><Text style={styles.logo}>Cons</Text></View>
          <View style={styles.proconList}>
            {renderCons}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ccc',
      flex: 1,
      flexDirection: 'row',
    },
    procon: {
      flex: 1,
      borderWidth: 2,
      flexDirection: 'column',
    },
    logo: {
      fontSize: 30,
      textAlign: 'center',
    },
    proconListLogo: {
      flex: 1,
      backgroundColor: 'blue',
    },
    proconList: {
      flex: 10,
      backgroundColor: '#ccc',
    },
    listElement: {
      flex: 1,
    },
});

AppRegistry.registerComponent('firstTry', () => firstTry);
