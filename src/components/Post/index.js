import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Post = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.author}>{data.author}</Text>
    <Text styles={styles.content}>{data.content}</Text>
  </View>
);

export default Post;
