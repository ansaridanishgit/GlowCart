import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { MapPin, Clock, Globe, Bell, Phone, HelpCircle, ShieldCheck, FileText, LogOut, Edit, ArrowRight, MoveRight, ChevronRight } from 'lucide-react-native';
import { AuthContext } from '../../Context/AuthContext';

export default function Profile() {
  const { logout } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreDots}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* User Info Card */}
      <View style={styles.userCard}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
          style={styles.userImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Olivia</Text>
          <Text style={styles.userEmail}>Olivia@gmail.com</Text>
        </View>
        <TouchableOpacity>
          <Edit size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* First Section */}
      <View style={styles.sectionCard}>
        <TouchableOpacity style={styles.itemRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MapPin size={20} />
            <View style={styles.itemTextWrap}>
              <Text style={styles.itemTitle}>Address</Text>
              <Text style={styles.itemSubtitle}>Manage your saved address</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#999" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Clock size={20} />
            <View style={styles.itemTextWrap}>
              <Text style={styles.itemTitle}>Order History</Text>
              <Text style={styles.itemSubtitle}>View your past orders</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#999" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Globe size={20} />
            <View style={styles.itemTextWrap}>
              <Text style={styles.itemTitle}>Language</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#999" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Bell size={20} />
            <View style={styles.itemTextWrap}>
              <Text style={styles.itemTitle}>Notifications</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#999" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      {/* Second Section */}
      <View style={styles.sectionCard}>
        <TouchableOpacity style={styles.itemRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Phone size={20} />
            <View style={styles.itemTextWrap}>
              <Text style={styles.itemTitle}>Contact Us</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#999" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <HelpCircle size={20} />
            <View style={styles.itemTextWrap}>
              <Text style={styles.itemTitle}>Get Help</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#999" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ShieldCheck size={20} />
            <View style={styles.itemTextWrap}>
              <Text style={styles.itemTitle}>Privacy Policy</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#999" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FileText size={20} />
            <View style={styles.itemTextWrap}>
              <Text style={styles.itemTitle}>Terms and Conditions</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#999" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={logout} style={[styles.itemRow, styles.logoutRow]}>
          <LogOut size={20} />
          <View style={styles.itemTextWrap}>
            <Text style={[styles.itemTitle, { color: '#B84953' }]}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE6E3',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  moreButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25
  },
  moreDots: {
    fontSize: 28,
    color: '#000',
  },
  userCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 2,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  userEmail: {
    fontSize: 13,
    color: '#666',
  },
  sectionCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 4,
    borderRadius: 12,
    elevation: 2,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'space-between'
  },
  logoutRow: {
    borderBottomWidth: 0,
    justifyContent:'flex-start'
  },
  itemTextWrap: {
    marginLeft: 16,
  },
  itemTitle: {
    fontSize: 15,
    color: '#000',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
});
