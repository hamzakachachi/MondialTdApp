import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

export default function MonitoringScreen() {
  return (
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 375,
            height: 812,
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 375,
              height: 44,
              backgroundColor: '#ffffff',
              position: 'relative',
              zIndex: 302,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
          >
            <View
              style={{
                width: '14.32%',
                height: '40.91%',
                position: 'absolute',
                top: '31.82%',
                left: '5.31%',
                overflow: 'hidden',
                zIndex: 303,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 54,
                  height: 18,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'SF Pro Text',
                  fontSize: 15,
                  fontWeight: '600',
                  lineHeight: 17.9,
                  color: '#1f2024',
                  letterSpacing: -0.17,
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  textAlign: 'center',
                  zIndex: 304,
                  transform: [{ translateY: -9 }],
                }}
                numberOfLines={1}
              >
                9:41
              </Text>
            </View>
            <View
              style={{
                width: 68,
                height: 14,
                position: 'absolute',
                top: '50%',
                right: 14,
                overflow: 'hidden',
                zIndex: 305,
                transform: [{ translateY: -6 }, { translateX: 0 }],
              }}
            >
              {/* <ImageBackground
                style={{
                  width: 29,
                  height: 20,
                  fontFamily: 'SF Pro Text',
                  fontSize: 17,
                  fontWeight: '400',
                  lineHeight: 20,
                  position: 'absolute',
                  top: -3,
                  left: 41,
                  zIndex: 306,
                }}
                source={require('./assets/images/33f4dbf4-2ba9-4072-a4fd-1abe711d3d1e.png')}
                resizeMode='cover'
              />
              <ImageBackground
                style={{
                  width: 19,
                  height: 17,
                  fontFamily: 'SF Pro Text',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 16.707,
                  position: 'absolute',
                  top: -1,
                  left: 21,
                  zIndex: 308,
                }}
                source={require('./assets/images/7467fc0b-d673-43a0-a681-f1dbdc458e03.png')}
                resizeMode='cover'
              />
              <ImageBackground
                style={{
                  width: '25.15%',
                  height: '76.43%',
                  position: 'absolute',
                  top: '11.43%',
                  left: '0.74%',
                  zIndex: 307,
                }}
                source={require('./assets/images/2b744097-cafb-4bf7-8e8b-39a31201cb0c.png')}
              /> */}
            </View>
          </View>
          <View
            style={{
              width: 375,
              height: 56,
              backgroundColor: '#ffffff',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 309,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 63,
                height: 17,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 14,
                fontWeight: '800',
                lineHeight: 16.943,
                color: '#1f2024',
                position: 'absolute',
                top: '50%',
                left: '50%',
                textAlign: 'center',
                zIndex: 310,
                transform: [{ translateY: -8.5 }, { translateX: -31 }],
              }}
              numberOfLines={1}
            >
              Traceurs
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              width: 311,
              paddingTop: 12,
              paddingRight: 16,
              paddingBottom: 12,
              paddingLeft: 16,
              flexDirection: 'row',
              gap: 16,
              alignItems: 'flex-end',
              flexWrap: 'nowrap',
              backgroundColor: '#f7f8fd',
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              borderBottomRightRadius: 24,
              borderBottomLeftRadius: 24,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 15,
              marginTop: 2,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 32,
            }}
          >
            {/* <ImageBackground
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
                zIndex: 16,
              }}
              source={require('./assets/images/cb7524ec-610e-4a06-b032-2469078800dd.png')}
              resizeMode='cover'
            /> */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                alignItems: 'center',
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: '0',
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 17,
              }}
            >
              <Text
                style={{
                  height: 20,
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Inter',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#8f9098',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 18,
                }}
                numberOfLines={1}
              >
                Search
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              width: 332,
              paddingTop: 4,
              paddingRight: 4,
              paddingBottom: 4,
              paddingLeft: 4,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'nowrap',
              backgroundColor: '#eaf2ff',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              borderBottomLeftRadius: 16,
              position: 'relative',
              zIndex: 296,
              marginTop: 14,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 22,
            }}
          >
            <View
              style={{
                display: 'flex',
                paddingTop: 8,
                paddingRight: 12,
                paddingBottom: 8,
                paddingLeft: 12,
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: '0',
                flexWrap: 'nowrap',
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                position: 'relative',
                zIndex: 297,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 31,
                  height: 15,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Inter',
                  fontSize: 12,
                  fontWeight: '700',
                  lineHeight: 14.523,
                  color: '#1f2024',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 298,
                }}
                numberOfLines={1}
              >
                Units
              </Text>
            </View>
            {/* <ImageBackground
              style={{
                width: 1,
                height: 11,
                flexShrink: 0,
                position: 'relative',
                zIndex: 299,
              }}
              source={require('./assets/images/744c5bb9-4b03-44cc-95cf-a29dc7087483.png')}
              resizeMode='cover'
            /> */}
            <View
              style={{
                display: 'flex',
                paddingTop: 8,
                paddingRight: 12,
                paddingBottom: 8,
                paddingLeft: 12,
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: '0',
                flexWrap: 'nowrap',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                position: 'relative',
                zIndex: 300,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 51,
                  height: 15,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Inter',
                  fontSize: 12,
                  fontWeight: '700',
                  lineHeight: 14.523,
                  color: '#71727a',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 301,
                }}
                numberOfLines={1}
              >
                Groupes
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
  );
}
