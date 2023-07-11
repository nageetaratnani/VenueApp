/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {HomeView} from './HomeView';
import {setVenues} from 'stores/generalSlice';
import { useDispatch } from 'react-redux';
const HomeController = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues',
      ); // Replace with your API endpoint
      const json = await response.json();
      dispatch(setVenues(json.results));
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return <HomeView />;
};

export default HomeController;
