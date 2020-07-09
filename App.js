import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: '',
    };
  }

  calculateResult() {
    const temp = this.state.resultText;
  }

  btnPressed(value) {
    console.log(value);
    if (value == '=') {
      return this.calculateResult();
    } else {
      this.setState({
        resultText: this.state.resultText + value,
      });
    }
  }

  operate(operation) {
    switch(operation) {
      case 'Del':
        let text = this.state.resultText.split('');
        text.pop();
        this.setState({
          resultText: text.join(''),
        });
    }
  }

  render() {
    let btnRows = [];
    let nums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['.', 0, '='],
    ];
    for (let i = 0; i < 4; i++) {
      let btnRow = [];
      for (let j = 0; j < 3; j++) {
        btnRow.push(
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.btnPressed(nums[i][j])}>
            <Text style={styles.btnNum}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      btnRows.push(<View style={styles.row}>{btnRow}</View>);
    }

    let operatorRow = [];
    let operators = ['Del', '+', '-', '*', '/'];
    for (let i = 0; i < 5; i++) {
      operatorRow.push(
        <TouchableOpacity
          onPress={() => this.operate(operators[i])}
          style={styles.btn}>
          <Text style={styles.btnOperator}>{operators[i]}</Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{btnRows}</View>
          <View style={styles.operations}>{operatorRow}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  btnNum: {
    fontSize: 36,
    color: 'white',
  },
  btnOperator: {
    fontSize: 26,
    color: 'white',
  },
  result: {
    flex: 2,
    backgroundColor: '#FFFAF0',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 40,
    color: '#1E90FF',
  },
  calculation: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculationText: {
    fontSize: 26,
    color: '#1E90FF',
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#696969',
  },
  operations: {
    flex: 1,
    backgroundColor: '#2F4F4F',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
});
