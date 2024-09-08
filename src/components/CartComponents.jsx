import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Icon } from 'react-native-paper';

function CartComponents() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Request permission for Android
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need your location to show you on the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      ).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      });
    } else {
      getCurrentLocation();
    }
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  if (!location) {
    return null; // You can show a loading indicator here
  }

  return (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            // showsUserLocation={true}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={location} 
              title="CAR 1"
              description='blaa'
              image={{uri:"https://cdn-icons-png.freepik.com/64/9931/9931611.png?ga=GA1.1.829876706.1725818239"}}/>
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

export default CartComponents
