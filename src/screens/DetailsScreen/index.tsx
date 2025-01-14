import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/navigation';
import { styles } from './styles';

interface Props {
  route: RouteProp<RootStackParamList, 'Details'>;
}

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { show } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: show.image?.original || 'https://via.placeholder.com/680x1000',
        }}
        style={styles.heroImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{show.name}</Text>
        {show.genres && (
          <Text style={styles.genres}>{show.genres.join(' • ')}</Text>
        )}
        <Text style={styles.rating}>
          Rating: {show.rating?.average || 'N/A'}/10
        </Text>
        <Text style={styles.summary}>
          {show.summary?.replace(/<[^>]*>/g, '') || 'No summary available'}
        </Text>
        {show.schedule && (
          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleTitle}>Schedule</Text>
            <Text style={styles.scheduleText}>
              {show.schedule.days.join(', ')} at {show.schedule.time}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;