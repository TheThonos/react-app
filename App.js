import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login, Content, loggedIn } from './objects/Objects';
import { useState } from 'react';

function useForceUpdate(){
	const [value, setValue] = useState(false);
	return () => setValue(!value);
}

export default function App() {
	let update = useForceUpdate();
  return (
    <View style={styles.container}>
      {loggedIn ? <Content/> : <Login update={update}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
