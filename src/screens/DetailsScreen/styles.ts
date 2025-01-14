import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  heroImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.5,
  },
  content: {
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  genres: {
    color: '#999',
    fontSize: 14,
    marginBottom: 8,
  },
  rating: {
    color: '#E50914',
    fontSize: 16,
    marginBottom: 16,
  },
  summary: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  scheduleContainer: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 8,
  },
  scheduleTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scheduleText: {
    color: '#999',
    fontSize: 16,
  },
});
