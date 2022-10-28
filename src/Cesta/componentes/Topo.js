import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native'
import Texto from '../../componentes/Texto'

const [width1, height1] = [Dimensions.get('screen').width, Dimensions.get('screen').height]

export default function Topo(props){
  return(
    <>
      <Image style={estilos.topo} source={props.topoImagem}/>
      <Texto style={estilos.titulo} weight="bold" children={props.titulo}/>
    </>
  )
}

const estilos = StyleSheet.create(
  {
    topo: {
      width: "100%",
      height: 578/768 * width1
    },
    titulo:{
      width:"100%",
      marginTop: height1 * 0.1,
      fontSize: 15,
      color:"white",
      lineHeight:25,
      position:"absolute",
      textAlign:"center",
      justifyContent:"center",
      alignItems:"center"
    },
  }
)
