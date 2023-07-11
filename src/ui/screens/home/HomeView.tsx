/* eslint-disable prettier/prettier */
import {Venue} from 'models/GetVenueListResponseModel';
import React, {FC} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';
import {RootState} from 'stores/store';

type Props = {};

export const HomeView: FC<Props> = () => {
  const {venues} = useSelector((state: RootState) => state.general);
  const screenWidth = Dimensions.get('window').width;
  const renderItem = ({item}: {item: Venue; index: number}) => {
    return (
      <View>
        <Image
          source={{uri: item.featured_image}}
          width={screenWidth}
          height={300}
          style={{backgroundColor: '#CCCCCC'}}
        />
        <View style={{padding: 16}}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={[styles.text, {marginTop: 16}]}>View venue on map</Text>
          <MapView
            style={styles.mapView}
            initialRegion={{
              latitude: item.lat,
              longitude: item.lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker coordinate={{latitude: item.lat, longitude: item.lon}} />
          </MapView>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={venues}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    width: 200,
    height: 200,
    marginRight: 16,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
  },
  mapView: {width: 400, height: 300, marginTop: 16},
});
