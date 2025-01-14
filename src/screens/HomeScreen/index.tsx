import React from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import MovieCard from '../../components/movie/MovieCard';
import { useMovies } from '../../hooks/useMovies';
import { styles } from './styles';
import { IShow } from '../../@types/api';
import Loading from '../../components/common/Loading';
import ErrorMessage from '../../components/common/ErrorMessage';

interface Props {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const renderMovie = ({ item }: { item: IShow }) => (
    <MovieCard
      movie={item}
      onPress={() => navigation.navigate('Details', { show: item })}
    />
  );

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.searchText}>Search movies and shows...</Text>
      </Pressable>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.movieList}
      />
    </View>
  );
};

export default HomeScreen;