import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import color from '../res/color';
import { scaleFont, scaleHeight, scaleWidth } from '../res/layout';

const { width, height } = Dimensions.get('window');

export default function GoogleMap() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetch("https://dapi.kakao.com/v2/local/search/keyword.json?query=카페", {
      headers: {
        Authorization: `KakaoAK 11ca7790c44949e3b36af8e5be5ee113`,
      }
    })
      .then(res => res.json())
      .then(data => {
        const markerList = data.documents.map(item => ({
          key: item.id,
          latitude: parseFloat(item.y),
          longitude: parseFloat(item.x),
          title: item.place_name,
        }));
        setMarkers(markerList);
      })
      .catch(console.error);
  }, []);

  return (
    <MapView
      style={{ width, height }}
      initialRegion={{
        latitude: 37.5665,
        longitude: 126.9780,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {markers.map(marker => (
        <Marker
          key={marker.key}
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          title={marker.title}
        >
          <View style={styles.customMarker} />
          <Callout tooltip>
            <View style={styles.calloutContainer}>
              <View style={styles.calloutBox}>
                <Text style={styles.calloutText}>시작 스터디카페 인천 송도점</Text>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>

        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  customMarker: {
    width: 10,
    height: 10,
    backgroundColor: color.mainColor,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: color.black
  },
  calloutContainer: {
    alignItems: 'center',
  },
  calloutBox: {
    backgroundColor: color.mainColor,
    // borderWidth: 1,
    width: scaleWidth(180),
    // height: scaleHeight(40),
    paddingVertical: scaleHeight(7),
    paddingHorizontal: scaleWidth(8),
  },
  calloutText: {
    color: color.black,
    fontFamily: 'BMDoHyeon',
    fontWeight: '400',
    fontSize: scaleFont(13),
    lineHeight: scaleFont(16),
    textAlign: 'center'
  },

  arrowBorder: {
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: color.mainColor,
    borderLeftWidth: 8,
    borderLeftColor: 'transparent',
    borderRightWidth: 8,
    borderRightColor: 'transparent',
  },

  arrow: {
    position: 'absolute',
    top: 1,
    width: 0,
    height: 0,
    borderTopWidth: 9,
    borderTopColor: color.mainColor,
    borderLeftWidth: 7,
    borderLeftColor: 'transparent',
    borderRightWidth: 7,
    borderRightColor: 'transparent',
  },
});
