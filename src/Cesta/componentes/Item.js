import React from 'react';
import Texto from '../../componentes/Texto'
import { Image, StyleSheet, View } from 'react-native';

export default function Item({item}){
  return( 
      <View key={item.nome} style={estilos.row}>
        <Image style={estilos.imagem} source={item.imagem}/>
        <Texto style={estilos.nome} children={item.nome}/>
      </View >
  )
}

const estilos = StyleSheet.create(
  {
    row:{
      marginHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#ececec",
      paddingVertical: 16
      },
    imagem: {
      width: 48,
      height: 48,
      marginRight: 11,
    },
    nome: {
      fontSize: 16,
      lineHeight: 26,
      color: "#464646"
    }
  }
)