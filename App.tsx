import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Root from './src/root/Root';


const App = () => {
  
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text>
        Other Components
      </Text>
      <Text>
        ........
      </Text>
      <Text>
        ........
      </Text>
      <Text style={{ marginBottom: 40 }}>
        Other Components
      </Text>
      <Root
        value={(val) => console.log(val)}
        numberOfDigits={8}
        inputShape={'box'}
        // secureEntry
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
