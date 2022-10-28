import logo from '../../assets/logo.png';
import topoImg from '../../assets/topo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abobora.png'
const cesta = {
  topo: {
    titulo: 'Detalhes da cesta',
    topoImagem: topoImg, 
    },

  detalhes: {
    nome: 'Lorem ipsum',
    nomeFazenda: 'Lorem ipsum dolor',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit',
    imagemFazenda: logo,
    preco: 'R$ 40,00',
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens na cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
  }
}

export default cesta;
