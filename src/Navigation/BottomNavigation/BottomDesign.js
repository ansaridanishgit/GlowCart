import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Home,
  Tag,
  Heart,
  User,
} from 'lucide-react-native';

const CustomBottomBar = ({ navigation, state }) => {
  const insets = useSafeAreaInsets();
  const currentRoute = state.routes[state.index].name;

  const tabs = [
    { name: 'Home', label: 'Home', icon: Home },
    { name: 'Offers', label: 'Offers', icon: Tag },
    { name: 'Wishlist', label: 'Wishlist', icon: Heart },
    { name: 'Profile', label: 'Profile', icon: User },
  ];

  return (
    <View style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
      <View style={styles.container}>
        {tabs.map((tab, index) => {
          const isFocused = currentRoute === tab.name;
          const IconComponent = tab.icon;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(tab.name)}
              style={styles.tabButton}
            >
              <View style={styles.tabInner}>
                <IconComponent
                  size={22}
                  color={isFocused ? '#B84953' : '#6f6f6fff'}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    {
                      color: isFocused ? '#B84953' : '#6f6f6fff',
                      fontWeight: isFocused ? 'bold' : 'normal',
                    },
                  ]}
                >
                  {tab.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 8,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 13,
    marginTop: 2,
  },
});

export default CustomBottomBar;
