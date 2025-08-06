const { StyleSheet } = require("react-native");

const AuthStackCss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9A7A2',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#546E7A',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555', // softened from #777
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginVertical: 10,
    borderRadius: 6,
  },
  touchableButton: {
    backgroundColor: '#546E7A',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  timerContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  timerText: {
    color: '#888',
  },
  resendText: {
    color: '#546E7A',
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerLink: {
    color: '#546E7A',
    fontWeight: 'bold',
  },
});

export default AuthStackCss