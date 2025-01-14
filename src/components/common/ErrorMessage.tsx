// src/components/common/ErrorMessage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#E50914',
    margin: 16,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ErrorMessage;