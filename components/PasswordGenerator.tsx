import {
  View,
  Text,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {css} from './css/Css';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox';

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

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.itemsCenter, styles.m10]}>
        <Text style={styles.headingText}>Password Generator</Text>
      </View>
      <Formik
        initialValues={{length: ''}}
        validationSchema={passwordSchema}
        onSubmit={values => {
          console.log(values);
          generatePasswordString(+values.length); // + is used to convert string to number
        }}>
        {({
          values,
          touched,
          errors,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        }) => (
          <>
            <View style={[styles.container]}>
              <View style={[styles.inputWrapper]}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length: </Text>
                  {touched.length && errors.length && (
                    <Text style={styles.errorText}>{errors.length}</Text>
                  )}
                </View>
                <TextInput
                  style={styles.inputStyle}
                  value={values.length}
                  placeholder="Ex. 9"
                  onChangeText={handleChange('length')}
                  onBlur={handleBlur('length')}
                  keyboardType="numeric"
                />
              </View>

              <View style={[styles.inputWrapper]}>
                <Text style={styles.heading}>Include Lowercase: </Text>
                <BouncyCheckbox
                  size={25}
                  fillColor="orange"
                  //   unFillColor="#FFFFFF"
                  iconStyle={{borderColor: 'orange'}}
                  isChecked={lowercase}
                  onPress={() => setLowercase(!lowercase)}
                />
              </View>

              <View style={[styles.inputWrapper]}>
                <Text style={styles.heading}>Include Uppercase: </Text>
                <BouncyCheckbox
                  size={25}
                  fillColor="green"
                  iconStyle={{borderColor: 'green'}}
                  isChecked={uppercase}
                  onPress={() => setUppercase(!uppercase)}
                />
              </View>

              <View style={[styles.inputWrapper]}>
                <Text style={styles.heading}>Include Numbers: </Text>
                <BouncyCheckbox
                  size={25}
                  fillColor="red"
                  iconStyle={{borderColor: 'red'}}
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)}
                />
              </View>

              <View style={[styles.inputWrapper]}>
                <Text style={styles.heading}>Include Symbols: </Text>
                <BouncyCheckbox
                  size={25}
                  fillColor="magenta"
                  iconStyle={{borderColor: 'magenta'}}
                  isChecked={symbols}
                  onPress={() => setSymbols(!symbols)}
                />
              </View>
            </View>

            <View style={[styles.containerRow, styles.itemsCenter, styles.m10]}>
              <Pressable
                onPress={() => handleSubmit()}
                disabled={!isValid}
                style={[
                  styles.primaryBtn,
                  isValid ? styles.cardGreen : styles.cardDisable,
                ]}>
                <Text style={[styles.btnTxt]}>Generate Password</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  resetPassword();
                  handleReset();
                }}
                style={styles.secondaryBtn}>
                <Text style={styles.btnTxt}>Reset</Text>
              </Pressable>
              {/* <Button
                  disabled={!isValid}
                  title="Generate Password"
                  onPress={() => handleSubmit}
                  color="green"
                />
                <Button
                  title="Reset"
                  onPress={() => {
                    resetPassword();
                    handleReset();
                  }}
                /> */}
            </View>
          </>
        )}
      </Formik>

      {isPassGenerated ? (
        <View style={[styles.container, styles.itemsCenter, styles.m10, styles.cardPassword, styles.cardElevatedPassword]}>
          <Text style={styles.subTitle}>Generated Password: </Text>
          <Text selectable style={styles.headingText}>{password}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default PasswordGenerator;
