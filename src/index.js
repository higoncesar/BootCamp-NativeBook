import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import './config/ReactotronConfig';
import './config/DevtoolsConfig';

import styles from './styles';

import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Mussum',
        title: 'Aprendendo React Native',
        content:
          'Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Manduma pindureta quium dia nois paga. Per aumento de cachacis, eu reclamis. Mé faiz elementum girarzis, nisi eros vermeio.',
      },
      {
        id: 2,
        author: 'Higon César',
        title: 'Aprendendo React Native',
        content:
          'Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. A ordem dos tratores não altera o pão duris.',
      },
      {
        id: 3,
        author: 'Danielle Dias',
        title: 'Aprendendo React Native',
        content:
          'Paisis, filhis, espiritis santis. Leite de capivaris, leite de mula manquis sem cabeça. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Pra lá , depois divoltis porris, paradis.',
      },
      {
        id: 4,
        author: 'Bruno Soares',
        title: 'Aprendendo React Native',
        content:
          'Cevadis im ampola pa arma uma pindureta. Quem num gosta di mim que vai caçá sua turmis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      },
      {
        id: 5,
        author: 'Wilhas Pereira',
        title: 'Aprendendo React Native',
        content:
          'Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. A ordem dos tratores não altera o pão duris. In elementis mé pra quem é amistosis quis leo. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
