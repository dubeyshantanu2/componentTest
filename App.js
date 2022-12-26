import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';
import NewMessageForm from './NewMessageForm';
export default function App() {
  return (
    <>
      <Text testID="hello">Hello, Detox!</Text>
      <NewMessageForm />
    </>
  );
}
