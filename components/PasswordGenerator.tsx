import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {css} from './css/Css';
import * as Yup from 'yup';

const PasswordGenerator = () => {
  const styles = css();

  const passwordSchema = Yup.object().shape({
    length: Yup.number().required().min(6).max(20),
    // uppercase: Yup.boolean().required(),
    // lowercase: Yup.boolean().required(),
    // numbers: Yup.boolean().required(),
    // symbols: Yup.boolean().required(),
  });

  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (length: number) => {
    let charset = '';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    setPassword(createPassword(charset, length));
    setIsPassGenerated(true);
  };

  const createPassword = (charset: string, length: number) => {
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  };

  const reset = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowercase(false);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View style={[styles.container, styles.itemsCenter]}>
      <Text style={styles.headingText}>Password Generator</Text>
    </View>
  );
};

export default PasswordGenerator;
