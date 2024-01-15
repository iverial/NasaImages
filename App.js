import { StyleSheet, View } from 'react-native';
import AppRoutes from './src/Routes/AppRoutes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppRoutes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgba(7,26,93,255)",
    flex: 1,
    paddingTop:20
  },
});