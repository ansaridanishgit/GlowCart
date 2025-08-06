import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text as RNText,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Text, TextInput, Divider } from 'react-native-paper';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../../../Context/AuthContext';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const insets = useSafeAreaInsets();
  const { login } = useContext(AuthContext);

  const signIn = () => {
    login("ThisIsTestingtoken");
  };
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Header */}
      <StatusBar backgroundColor="#F1B0B0" barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.helloText}>Hello Again!</Text>
        <Text style={styles.subText}>Welcome back you’ve been missed.</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Email Field */}
        <TextInput
          label="Enter your email Id"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          outlineColor='#989696'
          activeOutlineColor='#F1B0B0'
          style={styles.input}
          right={<TextInput.Icon icon={() => <Mail color="#989696" size={20} />} />}
        />

        {/* Password Field */}
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          outlineColor='#989696'
          activeOutlineColor='#F1B0B0'
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

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotWrap}>
          <Text style={styles.forgotText}>Forgot password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity onPress={signIn} style={styles.loginBtn}>
          <RNText style={styles.loginText}>Log In</RNText>
        </TouchableOpacity>
      </View>

      {/* Or Continue */}
      <View style={styles.orWrap}>
        <Divider style={styles.divider} />
        <Text style={styles.orText}>Or Continue With</Text>
        <Divider style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socials}>
        <View style={styles.socialIconBack}>
        <Image source={require('../../../../assets/images/google.png')} style={styles.socialIcon} />
        </View>
        <View style={styles.socialIconBack}>
        <Image source={require('../../../../assets/images/apple.png')} style={styles.socialIcon} />
        </View>
        <View style={styles.socialIconBack}>
        <Image source={require('../../../../assets/images/facebook.png')} style={styles.socialIcon} />
        </View>
      </View>

      {/* Footer */}
<View style={[styles.footer, { bottom: insets.bottom + 20 }]}>
        <Text style={{ color: '#6C6C6C' }}>Not a Member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.registerText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
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
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  helloText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#B84953',
  },
  subText: {
    fontSize: 24,
    color: '#AD7373',
    marginTop: 5,
    fontWeight: '500',
    textAlign: 'center',
    width: '80%'
  },
  form: {
    marginTop: 30,
    width: '85%',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  forgotWrap: {
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  forgotText: {
    color: '#C45757',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  loginBtn: {
    backgroundColor: '#B84953',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 4,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: '80%',
  },
  orText: {
    marginHorizontal: 8,
    color: '#888',
    fontWeight: '500',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  socials: {
    flexDirection: 'row',
    width:'80%',
    justifyContent:'space-evenly',
    marginTop: 20,
  },
  socialIconBack:{
    width:55, 
    height:55, 
    backgroundColor:'#fff', 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:12
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
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
