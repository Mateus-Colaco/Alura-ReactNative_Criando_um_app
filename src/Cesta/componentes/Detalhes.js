import React from 'react';
import Texto from '../../componentes/Texto';
import { Image, StyleSheet, View } from 'react-native';
import Botao from './Botao'
export default function Detalhes(props) {
  return (
    <>
      <Texto weight="bold" children={props.nome} style={estilos.nome} />
      <View style={estilos.fazenda}>
        <Image style={estilos.imagemFazenda} source={props.imagemFazenda} />
        <Texto
          weight="regular"
          children={props.nomeFazenda}
          style={estilos.nomeFazenda}
        />
      </View>
      <Texto
        style={estilos.descricao}
        weight="regular"
        children={props.descricao}
      />
      <Texto style={estilos.preco} weight="bold" children={props.preco} />
      <Botao textBtn={props.botao}/>
    </>
  );
}

const estilos = StyleSheet.create({
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
