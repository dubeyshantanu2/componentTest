import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function NewMessageForm({ onSend }) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (onSend) {
      onSend(inputText);
    }
    setInputText('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder="Message" value={inputText} onChangeText={setInputText} />
      <Pressable onPress={handleSend}>
        <Text>Send</Text>
      </Pressable>
    </View>
  );
}
