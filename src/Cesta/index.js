import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Topo from './componentes/Topo';
import Texto from '../componentes/Texto';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
export default function Cesta({ topo, detalhes, itens }) {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={renderItem}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto
                  style={estilos.titulo}
                  weight="bold"
                  children={itens.titulo}
                />
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginTop: 32,
    marginBottom: 8,
    color: '#464646',
  },
});
