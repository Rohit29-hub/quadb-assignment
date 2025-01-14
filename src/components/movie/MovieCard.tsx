import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { IShow } from '../../@types/api';

interface MovieCardProps {
  movie: IShow;
  onPress: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image 
        source={{ uri: movie.image?.medium || 'https://via.placeholder.com/210x295' }} 
        style={styles.thumbnail}
      />
      <Text style={styles.title} numberOfLines={2}>
        {movie.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    maxWidth: '50%',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  title: {
    color: 'white',
    marginTop: 8,
    fontSize: 14,
  },
});

export default MovieCard;