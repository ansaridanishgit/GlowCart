import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text as RNText,
  StatusBar,
} from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SignUp({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Header */}
      <StatusBar backgroundColor="#F1B0B0" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.helloText}>Join The Glow!</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Full Name */}
        <TextInput
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          mode="outlined"
          outlineColor="#989696"
          activeOutlineColor="#F1B0B0"
          style={styles.input}
        />

        {/* Email */}
        <TextInput
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          outlineColor="#989696"
          activeOutlineColor="#F1B0B0"
          style={styles.input}
          right={<TextInput.Icon icon={() => <Mail color="#989696" size={20} />} />}
        />

        {/* Password */}
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          outlineColor="#989696"
          activeOutlineColor="#F1B0B0"
          style={styles.input}
          secureTextEntry={secureText}
          right={
            <TextInput.Icon
              icon={() =>
                secureText ? (
                  <TouchableOpacity onPress={() => setSecureText(false)}>
                    <Eye color="#989696" size={20} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setSecureText(true)}>
                    <EyeOff color="#989696" size={20} />
                  </TouchableOpacity>
                )
              }
            />
          }
        />

        {/* Confirm Password */}
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          mode="outlined"
          outlineColor="#989696"
          activeOutlineColor="#F1B0B0"
          style={styles.input}
          secureTextEntry={secureConfirm}
          right={
            <TextInput.Icon
              icon={() =>
                secureConfirm ? (
                  <TouchableOpacity onPress={() => setSecureConfirm(false)}>
                    <Eye color="#989696" size={20} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setSecureConfirm(true)}>
                    <EyeOff color="#989696" size={20} />
                  </TouchableOpacity>
                )
              }
            />
          }
        />

        {/* Create Account Button */}
        <TouchableOpacity style={styles.loginBtn}>
          <RNText style={styles.loginText}>Create Account</RNText>
        </TouchableOpacity>
      </View>

      {/* Footer */}
<View style={[styles.footer, { bottom: insets.bottom + 20 }]}>
        <Text style={{ color: '#6C6C6C' }}>Already a Member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.registerText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ---------- Styles ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE6E3',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#E98B8B',
    width: '100%',
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#B84953',
  },
  form: {
    marginTop: 30,
    width: '85%',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  loginBtn: {
    backgroundColor: '#B84953',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 4,
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    bottom:20,
    position:'absolute'
  },
  registerText: {
    color: '#B84953',
    fontWeight: 'bold',
  },
});
