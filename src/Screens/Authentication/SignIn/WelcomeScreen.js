import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <StatusBar backgroundColor="#F3CFCB" barStyle="dark-content" />

        <Image
          source={require('../../../../assets/images/image1.png')}
          resizeMode="contain"
          style={styles.image}
        />
      <Text style={styles.brandText}>Viorra</Text>
      <Text style={styles.subText}>Your Beauty, Delivered.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.pagination}>
        <View style={styles.dot}>
        <View style={[ { backgroundColor: '#fff', width:70, height:10, borderRadius:5 }]} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9A7A2', 
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: width,
    height: height * 0.7,
    alignSelf: 'center',
  },
  brandText: {
    fontSize: 45,
    fontWeight: '300',
    color: '#fff',
    fontFamily: 'serif',
    marginTop: 10,
  },
  subText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#B84953',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 16,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 8,
  },
  dot: {
    width: 150,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
  },
});
