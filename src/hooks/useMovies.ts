import { useState, useEffect } from 'react';
import { IShow } from '../@types/api';
import movieApi from '../services/api/movieApi';

export const useMovies = () => {
  const [movies, setMovies] = useState<IShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const response = await movieApi.getAllMovies();
      setMovies(response.data.map(item => item.show));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, loading, error, refetch: fetchMovies };
};