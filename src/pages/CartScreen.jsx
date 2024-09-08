// src/screens/CartScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
// import MapView, { Marker, UrlTile } from 'react-native-maps';
import WebView from 'react-native-webview';
import CartComponents from '../components/CartComponents';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.586347,
          longitude: -7.420230,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 33.586347, longitude: -7.420230 }}
          title={"RENAULT"}
          description={"Position: 33.586347, -7.420230 \nAltitude: 143m"}
        />
         <UrlTile
          urlTemplate="https://c.tile.openstreetmap.org/8/123/101.png"
          maximumZ={19}
        />
      </MapView> */}
      {/* <WebView
          originWhitelist={['*']}
          source={{ html: `<html>
          <body>
            <iframe width="600" height="450" frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/place?q=The+Westin+Turtle+Bay+Resort+%26+Spa%2C+Mauritius&key=AIzaSyDztlrk_3CnzGHo7CFvLFqE_2bUKEq1JEU" allowfullscreen></iframe>
          </body>
      </html>` }}
          style={styles.map}
        /> */}
        <CartComponents/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CartScreen;
