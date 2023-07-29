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
import OtpInput from 'custom-react-native-otp-input'

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
| numberOfDigits| number        |no        |The number of input fields (currently takes between 4 and 8) | 6 |
| inputShape    | string       |no        |A string to describe desired shape of the input field | circle |
| secureEntry   | boolean      |no        |Decide whether to show input or hide | false |
| includeAlphabets| boolean    |no         |Decide wether to accept letters as input | false |
| style | object |no | Add custom style to the component rapper | {} |
| itemStyle | object | no | Add cutom style the input rapper | {} |

