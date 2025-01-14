import axios from 'axios';
import { IApiResponse } from '../../@types/api';

const API_BASE_URL = 'https://api.tvmaze.com';

export const movieApi = {
  getAllMovies: () => 
    axios.get<IApiResponse[]>(`${API_BASE_URL}/search/shows?q=all`),
  
  searchMovies: (query: string) => 
    axios.get<IApiResponse[]>(`${API_BASE_URL}/search/shows?q=${query}`),
};

export default movieApi;