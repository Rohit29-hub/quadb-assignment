import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import SearchBar from '../../components/search/SearchBar';
import MovieCard from '../../components/movie/MovieCard';
import { movieApi } from '../../services/api/movieApi';
import { styles } from './styles';
import { IApiResponse, IShow } from '../../@types/api';

interface Props {
  navigation: NavigationProp<any>;
}

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<IShow[]>([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (text: string) => {
    setSearchTerm(text);
    if (text.length > 2) {
      setLoading(true);
      try {
        const response = await movieApi.searchMovies(text);
        setResults(response.data.map((item: IApiResponse) => item.show));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  const renderMovie = ({ item }: { item: IShow }) => (
    <MovieCard
      movie={item}
      onPress={() => navigation.navigate('Details', { show: item })}
    />
  );

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchTerm}
        onChangeText={searchMovies}
        placeholder="Search movies and shows..."
      />
      {loading ? (
        <ActivityIndicator size="large" color="#E50914" />
      ) : (
        <FlatList
          data={results}
          renderItem={renderMovie}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.resultsList}
        />
      )}
    </View>
  );
};

export default SearchScreen;