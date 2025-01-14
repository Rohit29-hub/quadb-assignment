import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChangeText, 
  placeholder = "Search movies and shows..." 
}) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      placeholderTextColor="#666"
      value={value}
      onChangeText={onChangeText}
      autoFocus
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    margin: 16,
    padding: 12,
    backgroundColor: '#333',
    borderRadius: 6,
    color: 'white',
  },
});

export default SearchBar;