import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Texto extends React.Component {
  render() {
    if (this.props.weight == 'bold') {
      return (
        <Text style={[this.props.style, estilos.textoBold]}>
          {this.props.children}
        </Text>
      );
    } else {
      return (
        <Text style={[this.props.style, estilos.texto]}>
          {this.props.children}
        </Text>
      );
    }
  }
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
  },
  textoBold: {
    fontFamily: 'MontserratBold',
  },
});
