import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Hello({ name }) {
  return (
    <View>
      <Text>Hello, {name}!</Text>
      <Image
        style={{ height: 100, width: 100 }}
        source={require('./assets/favicon.png')}
        accessibilityLabel="fav waving"
      />
    </View>
  );
}
