import React from 'react';
import Texto from '../../componentes/Texto';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Botao({textBtn}) {
  return(
  <TouchableOpacity style={estilos.botao}>
    <Texto style={estilos.textoBotao} children={textBtn} weight="bold" />
  </TouchableOpacity>
  )}

const estilos = StyleSheet.create({
  botao: {
    marginTop:12,
    backgroundColor: "#2A9F85",
    borderRadius:6,
    paddingVertical: 10,
    paddingHorizontal: 6,

  },
  textoBotao:{
    textAlign:"center",
    color:"#fff",
    fontSize: 16,
    lineHeight: 26
  }
});