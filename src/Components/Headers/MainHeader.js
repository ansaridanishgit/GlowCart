import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Bell, ShoppingBag } from 'lucide-react-native';

export default function MainHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent={true} />

      {/* Left - App Name */}
      <View style={styles.leftContainer}>
        <Text style={styles.appName}>Viorra</Text>
      </View>

      {/* Right - Icons */}
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.iconWrapper}>
          <Bell size={22} color="#000" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.iconWrapper}>
          <ShoppingBag size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#fff',
    height: 90,
    paddingHorizontal: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  appName: {
    fontSize: 22,
    color: '#B84953',
    fontWeight: '600',
    fontFamily: 'serif',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconWrapper: {
    padding: 6,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 5,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444', 
  },
});
