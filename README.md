# custom-react-native-otp-input
A simple and light reusable react native component to accept otp input. It is fully customizable, and written purely in Typescript.

# Installation

## Supported React Native version: >=0.59.0

```
npm install custom-react-native-otp-input
```

Or

```
yarn add custom-react-native-otp-input
```

### After installation, navigate to the ios folder and run

```
pod install
```

## Basice Usage
```
import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import OtpInput from './src/root/Root';

const App = () => {
  const [otp, setOtp] = useState<string>('')
  
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text>
        Other Components.....
      </Text>
      <OtpInput
        value={(val) => setOtp(val)}
        numberOfDigits={4}
        inputShape={'box'}
        secureEntry
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeAreaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  }
})
```

API Reference

| Property      | Type          |  Required | Description | Default |
| ------------- | ------------- | ----------| ------------| ------- |
| value         | callback      |yes        |returns the value as the user types|void|
| numberOfDigits| number        |yes        |The number of input fields | 4 |

